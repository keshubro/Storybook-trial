import { LitElement, html, css } from "lit-element";
import './fields-component';
import '@lion/button/lion-button.js';
import '@lion/radio-group/lion-radio-group.js';
import '@lion/radio-group/lion-radio.js';
import '@lion/select/lion-select.js';
import '@lion/form/lion-form.js';
// import '@lion/tabs/lion-tabs.js';
import { localize, LocalizeMixin } from '@lion/localize';
// import '@lion/dialog/lion-dialog.js';

export class MainComponent extends LocalizeMixin(LitElement)
{
    constructor()
    {
        super();
        var _this = this;

    }

    static get localizeNamespaces() {
        return [
          { 'lit-html-example': locale => import(`../translations/${locale}.js`) },
          ...super.localizeNamespaces,
        ];
      }

    static get styles()
    {
        return css`
            .main{
                min-height: 90vh;
            }
            .lform{
               
                width: 100%;
                box-shadow: 5px 10px 18px #888888;
                border-radius: 5px; 
            }
            form{
                                                                                                                
            }
            label{
                font-weight: bold;
            }
            #btn{
                border-radius: 5px;
                width: 90px;
            }
        `;
    }

    // updated()
    // {
    //     super.updated();
    //     // console.log(this.shadowRoot.querySelector('#frm'));
    //     // this.shadowRoot.querySelector('#btn').addEventListener('click', this.addClicked.bind(this));
    // }    

    

        
    validationFn(firstName, lastName, gender, phone, email)
    {   
        if(firstName == '' || lastName == '' || gender == '' || phone == '' || email == '')
        {
            return false;
        }

        return true;
    }

    
    submitClicked()
    {   
        const firstName = this.shadowRoot.querySelector('#firstName').shadowRoot.querySelector('#firstName').value;
        const lastName = this.shadowRoot.querySelector('#lastName').shadowRoot.querySelector('#lastName').value;
        const gender = this.shadowRoot.querySelector('#gender').shadowRoot.querySelector('#gender').modelValue;
        const phone = this.shadowRoot.querySelector('#phone').shadowRoot.querySelector('#phone').value;
        const email = this.shadowRoot.querySelector('#email').shadowRoot.querySelector('#email').value;

        const notEmpty = this.validationFn(firstName, lastName, gender, phone, email);

        if(notEmpty)
        {
            console.log('not empty');
        }

        else{
            console.log('empty');
        }

        // e.preventDefault();
        
    }
    
    render()
    {
        return html`
        <link rel="stylesheet" type="text/css" href="node_modules/bootstrap/dist/css/bootstrap.min.css">
          
            
      


            <section class="main d-flex justify-content-center align-items-center">
                <div class="container-fluid">
                    <div class="row justify-content-center align-items-center">
                        <div class="col-sm-6">
                            <lion-form class="lform">
                                <form id="frm" @submit=${this.submitClicked}>
                                    <div class="container">
                                        <div class="row mb-3">
                                            <div class="col-sm-3 col-xs-12">
                                                <label>${localize.msg('lit-html-example:firstName')} : </label>
                                            </div>
                                            <div class="col col-sm-9 col-xs-12">
                                                <fields-component id="firstName" requiredtype="text"></fields-component>  
                                            </div> 
                                        </div>
                                        <div class="row mb-3">
                                            <div class="col-sm-3 col-xs-12">
                                                <label>${localize.msg('lit-html-example:lastName')} : </label>
                                            </div>
                                            <div class="col-sm-9 col-xs-12">
                                                <fields-component id="lastName" requiredtype="text"></fields-component>
                                            </div>
                                        </div>
                                        <div class="row mb-3">
                                            <div class="col-sm-3 col-xs-12">
                                                <label>${localize.msg('lit-html-example:gender')} : </label>
                                            </div>
                                            <div class="col-sm-9 col-xs-12">
                                                <fields-component id="gender" requiredtype="radio"></fields-component>
                                            </div>
                                        </div>
                                        <div class="row mb-3">
                                            <div class="col-sm-3 col-xs-12">
                                                <label>${localize.msg('lit-html-example:phone')} : </label>
                                            </div>
                                            <div class="col-sm-9 col-xs-12">
                                                <fields-component id="phone" requiredtype="phone"></fields-component>
                                            </div>
                                        </div>
                                        <div class="row mb-4">
                                            <div class="col-sm-3 col-xs-12">
                                                <label>${localize.msg('lit-html-example:email')} : </label>
                                            </div>
                                            <div class="col-sm-9 col-xs-12">
                                                <fields-component id="email" requiredtype="email"></fields-component>
                                            </div>
                                        </div>
                                        <div class="row justify-content-center mb-3">
                                            <lion-button id='btn' class="col col-sm-2 justify-content-center">${localize.msg('lit-html-example:submit')}</lion-button>
                                        </div>
                                    </div>
                                </form>
                            </lion-form>
                        </div>
                    </div>
            </section>
        `;
    }
}

customElements.define('main-component', MainComponent);





