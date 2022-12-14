/**
 * search-simple.js
 * A wrapper for a typesense instantsearch autocomplete component.
 */

/* Begin React import statements */
import * as React from "react"
import qs from "qs"
import Typesense from "typesense"
import { navigate } from "gatsby"
import { InstantSearch, connectSearchBox } from "react-instantsearch-dom"
import { Autocomplete } from "./search-autocomplete"
import { SearchResponseAdapter } from "typesense-instantsearch-adapter/lib/SearchResponseAdapter"
import SearchResult from "./search-result"
import "@algolia/autocomplete-theme-classic"
import "./search-simple.scss"

/* Appends the search query to location url */
const VirtualSearchBox = connectSearchBox(() => null)
function createURL(searchState) {
  return qs.stringify(searchState, { addQueryPrefix: true })
}
function searchStateToUrl({ location }, searchState) {
  if (Object.keys(searchState).length === 0) {
    return ""
  }
  return `${location.pathname}${createURL(searchState)}`
}
function urlToSearchState({ search }) {
  return qs.parse(search.slice(1))
}

/* Provides a button and modal for searching */
export default function SearchInterface() {
  /* Check if client is a browser first before detecting URL state */
  const isBrowser = () => typeof window !== "undefined"
  const [searchState, setSearchState] = React.useState(
    () => isBrowser() && urlToSearchState(window.location)
  )
  const timerRef = React.useRef(null)
  React.useEffect(() => {
    clearTimeout(timerRef.current)

    timerRef.current = setTimeout(() => {
      isBrowser() &&
        window.history.pushState(
          searchState,
          null,
          isBrowser() &&
            searchStateToUrl({ location: window.location }, searchState)
        )
    }, 400)
  }, [searchState])
  /* Set the search state on submit */
  const onSubmit = React.useCallback(({ state }) => {
    setSearchState(searchState => ({
      ...searchState,
      query: state.query,
    }))
  }, [])
  /* Set the search on reset */
  const onReset = React.useCallback(() => {
    setSearchState(searchState => ({
      ...searchState,
      query: "",
    }))
  }, [])
  /* Added plugins for search */
  const plugins = React.useMemo(() => {
    return [] // add more plugins here
  }, [])
  /* Adapt the search responses from typesense server */
  const search_response_adapter = result =>
    new SearchResponseAdapter(
      result,
      { params: {} },
      { geoLocationField: "_geoloc" }
    )
  /* Wrap typesense adapter and provide as a client */
  const typesense_client = () =>
    new Typesense.Client({
      apiKey: process.env.TYPESENSE_API_SEARCH,
      nodes: [
        {
          host: "typesense.mattycakes.ca",
          port: "",
          protocol: "https",
        },
      ],
      connectionTimeoutSeconds: 2,
    })
  const client = typesense_client()

  return (
    <InstantSearch
      searchClient={client}
      indexName="documentation"
      searchState={searchState}
      onSearchStateChange={setSearchState}
      createURL={createURL}
    >
      <VirtualSearchBox />
      <Autocomplete
        classNames={{
          detachedCancelButton: "transition-all",
          form: "border-none",
          input: "autocomplete-input",
          detachedSearchButtonIcon: "cursor-pointer",
          detachedSearchButton: "search-button-toggle",
          detachedSearchButtonPlaceholder: "hidden",
        }}
        placeholder="Quick search..."
        detachedMediaQuery=""
        onSubmit={onSubmit}
        onReset={onReset}
        plugins={plugins}
        navigator={{
          navigate({ itemUrl }) {
            navigate(itemUrl)
          },
        }}
        initialState={{
          query: searchState.query,
        }}
        getSources={({ query }) => [
          {
            sourceId: "r",
            getItemUrl({ item }) {
              return item.page_path
            },
            getItems: () =>
              client
                .collections("documentation")
                .documents()
                .search({
                  q: query,
                  query_by: "title, description, main, tags",
                  group_by: "tags",
                  highlight_start_tag: "__aa-highlight__", // <===== Customize highlight tags
                  highlight_end_tag: "__/aa-highlight__", // <===== Customize highlight tags
                  highlight_fields: "title, description, main, tags",
                  highlight_affix_num_tokens: 8,
                  highlight_full_fields: "title, description, tags",
                  exhaustive_search: true,
                  typoTolerance: true,
                  ignorePlurals: true,
                })
                .then(result => {
                  return search_response_adapter(result).adapt().hits
                }),
            templates: {
              item: ({ item, components }) => {
                return <SearchResult hit={item} components={components} />
              },
            },
          },
        ]}
      />
    </InstantSearch>
  )
}
