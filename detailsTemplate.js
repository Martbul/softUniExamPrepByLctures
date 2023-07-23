import {html} from '../../../node_modules/lit-html/lit-html.js'

export const detailsTemplate = (shoe, isOwner, deleteHandler) =>html`
 <section id="details">
          <div id="details-wrapper">
            <p id="details-title">Shoe Details</p>
            <div id="img-wrapper">
              <img src=${shoe.imageUrl} alt="example1" />
            </div>
            <div id="info-wrapper">
              <p>Brand: <span id="details-brand">${shoe.brand}</span></p>
              <p>
                Model: <span id="details-model">${shoe.model}</span>
              </p>
              <p>Release date: <span id="details-release">${shoe.release}</span></p>
              <p>Designer: <span id="details-designer">${shoe.disigner}</span></p>
              <p>Value: <span id="details-value">${shoe.value}</span></p>
            </div>

            <!--Edit and Delete are only for creator-->
            ${isOwner 
            ? html` <div id="action-buttons">
              <a href=${`/edit/${shoe._id}`} id="edit-btn">Edit</a>
              <a href="javascript:void(0)" id="delete-btn" @click=${(e) => deleteHandler(shoe._id)}>Delete</a>
            </div>`
            :''}
           
          </div>
        </section>
`