import { LitElement, css, html } from 'lit';
import { customElement, property } from 'lit/decorators.js';

@customElement('solias-button')
export class SoliasButton extends LitElement {
    @property({ type: String }) label = 'Button';
    @property({ type: Boolean }) disabled = false;
    @property() variant = 'primary';

    render() {
        return html`
        <button
            class="solias-btn solias-btn--${this.variant}"
            ?disabled="${this.disabled}">
            ${this.label}
        </button>
        `;
    }

    static styles = css`
    .solias-btn {
        padding: 0.625rem 1.5rem;
        margin: 0;
        border: 0.0625rem solid var(--md-sys-color-primary);
        border-radius: 1.75rem;
        cursor: pointer;
        transition: all 0.5s ease;
    }

    .solias-btn.solias-btn--primary {
        background-color: var(--md-sys-color-primary);
        color: var(--md-sys-color-on-primary);
    }

    .solias-btn.solias-btn--secondary {
        background-color: var(--md-sys-color-secondary);
        color: var(--md-sys-color-on-secondary);
    }

    .solias-btn.solias-btn--tertiary {
        background-color: var(--md-sys-color-tertiary);
        color: var(--md-sys-color-on-tertiary);
    }

    .solias-btn:not(:disabled):hover {
        opacity: 0.8;
    }

    .solias-btn:disabled {
        background-color: var(--md-sys-color-surface);
        color: var(--md-sys-color-on-surface);
        border: none;
        cursor: not-allowed;
    }
    `;
}

declare global {
    interface HTMLElementTagNameMap {
        'solias-button': SoliasButton
    }
}