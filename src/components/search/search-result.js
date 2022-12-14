/**
 * search-result.js
 * A component to render result items for searches.
 */

/* Begin React import statements */
import React, { createElement } from "react"
import { Link } from "gatsby"

export default function ResultItem({ hit, components }) {
  return (
    <div class="aa-ItemWrapper">
      <Link to={hit.page_path} className="aa-ItemLink">
        <div className="aa-ItemContentBody">
          <div className="aa-ItemContentTitle">
            <components.Snippet tagName="mark" hit={hit} attribute="title" />
          </div>
          <div className="aa-ItemContentDescription">
            <components.Snippet tagName="mark" hit={hit} attribute="main" />
          </div>
        </div>
      </Link>
    </div>
  )
}
