import { LitElement, css, html } from "lit";
import { customElement, property } from "lit/decorators.js";

@customElement('solias-badge')
export class SoliasBadge extends LitElement {
    @property()
    label = '';

    render() {
        return html`
        <sup class="solias-badge ${this.label.length > 0 ? 'solias-badge--fill' : ''}">
            ${this.label}
        </sup>`;
    }

    static styles = css`
    .solias-badge {
        display: inline-block;
        padding: 0.125rem;
        background-color: var(--md-sys-color-error);
        border: none;
        border-radius: 1rem;
        margin: 0;
        min-width: 0.375rem;
        min-height: 0.375rem;
        color: var(--md-sys-color-on-error);
        font-size: 0.75rem;
        line-height: 1rem;
        text-align: center;
        box-sizing: border-box;
    }

    .solias-badge.solias-badge--fill {
        padding: 0 0.25rem;
        width: auto;
        height: 1rem;
    }
    `;
}

declare global {
    interface HTMLElementTagNameMap {
        'solias-badge': SoliasBadge
    }
}