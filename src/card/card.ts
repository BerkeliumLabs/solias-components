import { LitElement, css, html } from "lit";
import { customElement, property } from "lit/decorators.js";
import { SoliasCardType } from "../shared/enums/card-types";

@customElement('solias-card')
export class SoliasCard extends LitElement {

    @property({ type: SoliasCardType }) type = SoliasCardType.BLANK;

    render() {
        if (this.type == SoliasCardType.DEFAULT) {
            return html`<div class="solias-card">
                <slot name="header"></slot>
                <slot name="body"></slot>
                <slot name="footer"></slot>
            </div>`;
        } else if (this.type == SoliasCardType.HORIZONTAL) {
            return html`<div class="solias-card">
                <div class="solias-card__header">
                    <div class="head-left">
                        <div class="icon">
                            <slot name="icon"></slot>
                        </div>
                        <div class="title">
                            <slot name="title"></slot>
                            <slot name="subtitle"></slot>
                        </div>
                    </div>
                    <div class="head-right">
                        <slot name="menu"></slot>
                    </div>
                </div>
                <div class="solias-card__body">
                    <slot name="body"></slot>
                </div>
                <div class="solias-card__footer">
                    <slot name="footer"></slot>
                </div>
            </div>`;
        } else {
            return html`<div class="solias-card">
                <slot></slot>
            </div>`;
        }

    }

    static styles = css`
    .solias-card {
        display: flex;
        flex-direction: column;
        padding: 0.5rem;
        min-width: 50px;
        height: auto;
        border: 0.0625rem solid var(--md-sys-color-outline-variant);
        border-radius: 0.5rem;
    }

    .solias-card__header {
        display: flex;
        justify-content: space-between;
        align-items: center;
        width: 100%;
    }

    .solias-card__header .head-left {
        flex-grow: 1;
        display: flex;
        justify-content: space-between;
        align-items: center;
    }

    .solias-card__header .head-left .icon {

    }

    .solias-card__header .head-left .title {
        display: flex;
        flex-direction: column;
    }

    .solias-card__header .head-left .title h4 {
        margin: 0;
    }
    `;
}

declare global {
    export interface HTMLElementTagNameMap {
        'solias-card': SoliasCard
    }
}