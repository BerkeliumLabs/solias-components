import { LitElement, css, html } from 'lit';
import { customElement, property } from 'lit/decorators.js';

@customElement('solias-button')
export class SoliasButton extends LitElement {
    @property({ type: String })
    label = 'Button';

    render() {
        return html`
        <button class="solias-btn">${this.label}</button>
        `;
    }

    static styles = css`
    .solias-btn {
        background-color: red;
        color: #fff;
    }
    `;
}

declare global {
    interface HTMLElementTagNameMap {
        'solias-button': SoliasButton
    }
}