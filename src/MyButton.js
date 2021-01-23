import { LitElement, css, html } from "lit-element";

export class MyButton extends LitElement
{
    static get styles()
    {
        return css`
            button{
                background-color: #4caf50;
                border: none;
            }
        `;
    }

    render()
    {
        return html`<button type="button">Click yo</button>`;
    }
}