import { AfterViewInit, Component, Input, OnInit } from '@angular/core';
import { NgbActiveModal, NgbModal,NgbModalConfig } from '@ng-bootstrap/ng-bootstrap';
import postscribe from 'postscribe';

declare var $:any;

@Component({
 
  selector: 'app-donacion',
  templateUrl: './donacion.component.html',
  styleUrls: ['./donacion.component.css']
})
export class DonacionComponent implements AfterViewInit  {
  constructor(config: NgbModalConfig, private modalService: NgbModal) {
    // customize default values of modals used by this component tree
    config.backdrop = 'static';
    config.keyboard = false;
  }

  
  /*VARIBALES QUE OBTENDRAN EL VALOR DE LA DONACION*/
  value:Number;
  val_agua:Number ;
  val_hamburger:Number ;
  val_canasta:Number ;
  val_frutas:Number ;
  val_general:Number ;



  modal_paid:any;
  onChangeBebida(val: number) {
    console.log('here');  
    this.val_agua = val;
    // this.val_general = 0;
    console.log(this.val_agua);
    // $('#response').empty();
    // $('#modalPaid').remove();
    // this.modal_paid= null;
    // console.log($('.payment-checkout-modal'));
    if($('.payment-checkout-modal')!=null){
      $('.payment-checkout-modal').empty();
       $('.payment-checkout-modal').remove();
     }
  }


  onGeneralChange(val: number) {
    console.log('here2');  
    this.val_general = val;
    console.log(this.val_general);
    // $('#response').empty();
    // $('#modalPaid').remove();
    // this.modal_paid= null;
    console.log($('.payment-checkout-modal'));
    if($('.payment-checkout-modal')!=null){
       $('.payment-checkout-modal').empty();
       $('.payment-checkout-modal').remove();
    }
  }

  
  onGeneralHamburger(val: number) {
    console.log('here2');  
    this.val_hamburger = val;
    console.log(this.val_general);
    // $('#response').empty();
    // $('#modalPaid').remove();
    // this.modal_paid= null;
    console.log($('.payment-checkout-modal'));
    if($('.payment-checkout-modal')!=null){
       $('.payment-checkout-modal').empty();
       $('.payment-checkout-modal').remove();
    }
  }

  onChangeCanasta(val: number) {
    console.log('here2');  
    this.val_canasta = val;
    console.log(this.val_canasta);
    // $('#response').empty();
    // $('#modalPaid').remove();
    // this.modal_paid= null;
    console.log($('.payment-checkout-modal'));
    if($('.payment-checkout-modal')!=null){
       $('.payment-checkout-modal').empty();
       $('.payment-checkout-modal').remove();
    }
  }

  onChangeFrutas(val: number) {
    this.val_frutas = val;
    console.log(this.val_frutas);
    // $('#response').empty();
    // $('#modalPaid').remove();
    // this.modal_paid= null;
    console.log($('.payment-checkout-modal'));
    if($('.payment-checkout-modal')!=null){
       $('.payment-checkout-modal').empty();
       $('.payment-checkout-modal').remove();
    }
  }



  ngOnInit(): void {
  
  }
  
  openPaymentez(){
    console.log("paid")
    var donate =this.val_general;
    console.log(donate)
    console.log("XXX")
    // if($('.payment-checkout-modal')!=null){
    //   $('.payment-checkout-modal').empty();
    //   $('.payment-checkout-modal').remove();
    // }
    // $('#response').innerHTML=""
    // $('#response').innerHTML=""
    postscribe('#response2', `
    <script> 
    console.log('postscribe')
    var paymentCheckoutG =""
    var paymentCheckoutG = new PaymentCheckout.modal({
    client_app_code: 'INNOVA-EC-CLIENT', // Client Credentials Provied by Paymentez
    client_app_key: 'ZjgaQCbgAzNF7k8Fb1Qf4yYLHUsePk', // Client Credentials Provied by Paymentez
    locale: 'es', // User's preferred language (es, en, pt). English will be used by default.
    env_mode: 'stg', 
    onOpen: function () {
      console.log('modal open');
      console.log('${donate}');
    },
    onClose: function () {
      console.log('modal closed');
      console.log('${donate}');
      this.val_general=0;
    },
    onResponse: function (response) { // The callback to invoke when the Checkout process is completed
      /*
        In Case of an error, this will be the response.
        response = {
          "error": {
            "type": "Server Error",
            "help": "Try Again Later",
            "description": "Sorry, there was a problem loading Checkout."
          }
        }

        When the User completes all the Flow in the Checkout, this will be the response.
        response = {
          "transaction":{
              "status": "success", // success or failure
              "id": "CB-81011", // transaction_id
              "status_detail": 3 // for the status detail please refer to: https://paymentez.github.io/api-doc/#status-details
          }
        }
      */
      console.log('modal response');
      document.getElementById('response').innerHTML = JSON.stringify(response);
    }
    });
    var btnOpenCheckoutG =""
    var btnOpenCheckoutG = document.querySelector('.js-payment-checkoutG');
    

      paymentCheckoutG.open({
        user_id: '1234',
        user_email: '', //optional
        user_phone: '', //optional
        order_description: 'donation',
        order_amount:${donate},
        order_vat: 0,
        order_reference: '#234323411',
        //order_installments_type: 2, // optional: The installments type are only available for Equador. The valid values are: https://paymentez.github.io/api-doc/#installments-type
        //order_taxable_amount: 0, // optional: Only available for Datafast (Equador). The taxable amount, if it is zero, it is calculated on the total. Format: Decimal with two fraction digits.
        //order_tax_percentage: 10 // optional: Only available for Datafast (Equador). The tax percentage to be applied to this order.
      });
    
    btnOpenCheckoutG=null;
    window.addEventListener('popstate', function () {
      paymentCheckoutG.close();
      paymentCheckoutG.remove();
      paymentCheckoutG.empty();
      this.val_general=0;
    });

    </script>`)
  }

  donateCanasta(){
    console.log("paid")
    var donate =this.val_canasta;
    console.log(donate)
    console.log("XXX")
    // if($('.payment-checkout-modal')!=null){
    //   $('.payment-checkout-modal').empty();
    //   $('.payment-checkout-modal').remove();
    // }
    // $('#response').innerHTML=""
    // $('#response').innerHTML=""
    postscribe('#response2', `
    <script> 
    console.log('postscribe')
    var paymentCheckoutG =""
    var paymentCheckoutG = new PaymentCheckout.modal({
    client_app_code: 'INNOVA-EC-CLIENT', // Client Credentials Provied by Paymentez
    client_app_key: 'ZjgaQCbgAzNF7k8Fb1Qf4yYLHUsePk', // Client Credentials Provied by Paymentez
    locale: 'es', // User's preferred language (es, en, pt). English will be used by default.
    env_mode: 'stg', 
    onOpen: function () {
      console.log('modal open');
      console.log('${donate}');
    },
    onClose: function () {
      console.log('modal closed');
      console.log('${donate}');
      this.val_general=0;
    },
    onResponse: function (response) { // The callback to invoke when the Checkout process is completed
      /*
        In Case of an error, this will be the response.
        response = {
          "error": {
            "type": "Server Error",
            "help": "Try Again Later",
            "description": "Sorry, there was a problem loading Checkout."
          }
        }

        When the User completes all the Flow in the Checkout, this will be the response.
        response = {
          "transaction":{
              "status": "success", // success or failure
              "id": "CB-81011", // transaction_id
              "status_detail": 3 // for the status detail please refer to: https://paymentez.github.io/api-doc/#status-details
          }
        }
      */
      console.log('modal response');
      document.getElementById('response').innerHTML = JSON.stringify(response);
    }
    });
    var btnOpenCheckoutG =""
    var btnOpenCheckoutG = document.querySelector('.js-payment-checkoutG');
    

      paymentCheckoutG.open({
        "carrier":{
          "id": "payvalida"
        },
        user_id: '1234',
        user_email: '', //optional
        user_phone: '', //optional
        order_description: 'donation',
        order_amount:${donate}*15,
        order_vat: 0,
        order_reference: '#234323411',
        //order_installments_type: 2, // optional: The installments type are only available for Equador. The valid values are: https://paymentez.github.io/api-doc/#installments-type
        //order_taxable_amount: 0, // optional: Only available for Datafast (Equador). The taxable amount, if it is zero, it is calculated on the total. Format: Decimal with two fraction digits.
        //order_tax_percentage: 10 // optional: Only available for Datafast (Equador). The tax percentage to be applied to this order.
      });
    
    btnOpenCheckoutG=null;
    window.addEventListener('popstate', function () {
      paymentCheckoutG.close();
      paymentCheckoutG.remove();
      paymentCheckoutG.empty();
      this.val_general=0;
    });

    </script>`)


  }

  donateBebida(){
    console.log("paid")
    var donate =this.val_agua;
    console.log(donate)
    console.log("XXX")
    // if($('.payment-checkout-modal')!=null){
    //   $('.payment-checkout-modal').empty();
    //   $('.payment-checkout-modal').remove();
    // }
    // $('#response').innerHTML=""
    // $('#response').innerHTML=""
    postscribe('#response2', `
    <script> 
    console.log('postscribe')
    var paymentCheckoutG =""
    var paymentCheckoutG = new PaymentCheckout.modal({
    client_app_code: 'INNOVA-EC-CLIENT', // Client Credentials Provied by Paymentez
    client_app_key: 'ZjgaQCbgAzNF7k8Fb1Qf4yYLHUsePk', // Client Credentials Provied by Paymentez
    locale: 'es', // User's preferred language (es, en, pt). English will be used by default.
    env_mode: 'stg', 
    onOpen: function () {
      console.log('modal open');
      console.log('${donate}');
    },
    onClose: function () {
      console.log('modal closed');
      console.log('${donate}');
      this.val_general=0;
    },
    onResponse: function (response) { // The callback to invoke when the Checkout process is completed
      /*
        In Case of an error, this will be the response.
        response = {
          "error": {
            "type": "Server Error",
            "help": "Try Again Later",
            "description": "Sorry, there was a problem loading Checkout."
          }
        }

        When the User completes all the Flow in the Checkout, this will be the response.
        response = {
          "transaction":{
              "status": "success", // success or failure
              "id": "CB-81011", // transaction_id
              "status_detail": 3 // for the status detail please refer to: https://paymentez.github.io/api-doc/#status-details
          }
        }
      */
      console.log('modal response');
      document.getElementById('response').innerHTML = JSON.stringify(response);
    }
    });
    var btnOpenCheckoutG =""
    var btnOpenCheckoutG = document.querySelector('.js-payment-checkoutG');
    

      paymentCheckoutG.open({
        user_id: '1234',
        user_email: '', //optional
        user_phone: '', //optional
        order_description: 'donation',
        order_amount:${donate}*1,
        order_vat: 0,
        order_reference: '#234323411',
        //order_installments_type: 2, // optional: The installments type are only available for Equador. The valid values are: https://paymentez.github.io/api-doc/#installments-type
        //order_taxable_amount: 0, // optional: Only available for Datafast (Equador). The taxable amount, if it is zero, it is calculated on the total. Format: Decimal with two fraction digits.
        //order_tax_percentage: 10 // optional: Only available for Datafast (Equador). The tax percentage to be applied to this order.
      });
    
    btnOpenCheckoutG=null;
    window.addEventListener('popstate', function () {
      paymentCheckoutG.close();
      paymentCheckoutG.remove();
      paymentCheckoutG.empty();
      this.val_general=0;
    });

    </script>`)

  }


  donateHamburger(){
    console.log("paid")
    var donate =this.val_hamburger;
    console.log(donate)
    console.log("XXX")
    // if($('.payment-checkout-modal')!=null){
    //   $('.payment-checkout-modal').empty();
    //   $('.payment-checkout-modal').remove();
    // }
    // $('#response').innerHTML=""
    // $('#response').innerHTML=""
    postscribe('#response2', `
    <script> 
    console.log('postscribe')
    var paymentCheckoutG =""
    var paymentCheckoutG = new PaymentCheckout.modal({
    client_app_code: 'INNOVA-EC-CLIENT', // Client Credentials Provied by Paymentez
    client_app_key: 'ZjgaQCbgAzNF7k8Fb1Qf4yYLHUsePk', // Client Credentials Provied by Paymentez
    locale: 'es', // User's preferred language (es, en, pt). English will be used by default.
    env_mode: 'stg', 
    onOpen: function () {
      console.log('modal open');
      console.log('${donate}');
    },
    onClose: function () {
      console.log('modal closed');
      console.log('${donate}');
      this.val_general=0;
    },
    onResponse: function (response) { // The callback to invoke when the Checkout process is completed
      /*
        In Case of an error, this will be the response.
        response = {
          "error": {
            "type": "Server Error",
            "help": "Try Again Later",
            "description": "Sorry, there was a problem loading Checkout."
          }
        }

        When the User completes all the Flow in the Checkout, this will be the response.
        response = {
          "transaction":{
              "status": "success", // success or failure
              "id": "CB-81011", // transaction_id
              "status_detail": 3 // for the status detail please refer to: https://paymentez.github.io/api-doc/#status-details
          }
        }
      */
      console.log('modal response');
      document.getElementById('response').innerHTML = JSON.stringify(response);
    }
    });
    var btnOpenCheckoutG =""
    var btnOpenCheckoutG = document.querySelector('.js-payment-checkoutG');
    

      paymentCheckoutG.open({
        user_id: '1234',
        user_email: '', //optional
        user_phone: '', //optional
        order_description: 'donation',
        order_amount:${donate}*3.5,
        order_vat: 0,
        order_reference: '#234323411',
        //order_installments_type: 2, // optional: The installments type are only available for Equador. The valid values are: https://paymentez.github.io/api-doc/#installments-type
        //order_taxable_amount: 0, // optional: Only available for Datafast (Equador). The taxable amount, if it is zero, it is calculated on the total. Format: Decimal with two fraction digits.
        //order_tax_percentage: 10 // optional: Only available for Datafast (Equador). The tax percentage to be applied to this order.
      });
    
    btnOpenCheckoutG=null;
    window.addEventListener('popstate', function () {
      paymentCheckoutG.close();
      paymentCheckoutG.remove();
      paymentCheckoutG.empty();
      this.val_general=0;
    });

    </script>`)
    console.log(this.modal_paid);  
  }

  
  donateGeneral(){
    console.log("paid")
    var donate =this.val_general;
    console.log(donate)
    console.log("XXX")
    // if($('.payment-checkout-modal')!=null){
    //   $('.payment-checkout-modal').empty();
    //   $('.payment-checkout-modal').remove();
    // }
    // $('#response').innerHTML=""
    // $('#response').innerHTML=""
    postscribe('#response2', `
    <script> 
    console.log('postscribe')
    var paymentCheckoutG =""
    var paymentCheckoutG = new PaymentCheckout.modal({
    client_app_code: 'INNOVA-EC-CLIENT', // Client Credentials Provied by Paymentez
    client_app_key: 'ZjgaQCbgAzNF7k8Fb1Qf4yYLHUsePk', // Client Credentials Provied by Paymentez
    locale: 'es', // User's preferred language (es, en, pt). English will be used by default.
    env_mode: 'stg', 
    onOpen: function () {
      console.log('modal open');
      console.log('${donate}');
    },
    onClose: function () {
      console.log('modal closed');
      console.log('${donate}');
      this.val_general=0;
    },
    onResponse: function (response) { // The callback to invoke when the Checkout process is completed
      /*
        In Case of an error, this will be the response.
        response = {
          "error": {
            "type": "Server Error",
            "help": "Try Again Later",
            "description": "Sorry, there was a problem loading Checkout."
          }
        }

        When the User completes all the Flow in the Checkout, this will be the response.
        response = {
          "transaction":{
              "status": "success", // success or failure
              "id": "CB-81011", // transaction_id
              "status_detail": 3 // for the status detail please refer to: https://paymentez.github.io/api-doc/#status-details
          }
        }
      */
      console.log('modal response');
      document.getElementById('response').innerHTML = JSON.stringify(response);
    }
    });
    var btnOpenCheckoutG =""
    var btnOpenCheckoutG = document.querySelector('.js-payment-checkoutG');
    

      paymentCheckoutG.open({
        user_id: '1234',
        user_email: '', //optional
        user_phone: '', //optional
        order_description: 'donation',
        order_amount:${donate},
        order_vat: 0,
        order_reference: '#234323411',
        //order_installments_type: 2, // optional: The installments type are only available for Equador. The valid values are: https://paymentez.github.io/api-doc/#installments-type
        //order_taxable_amount: 0, // optional: Only available for Datafast (Equador). The taxable amount, if it is zero, it is calculated on the total. Format: Decimal with two fraction digits.
        //order_tax_percentage: 10 // optional: Only available for Datafast (Equador). The tax percentage to be applied to this order.
      });
    
    btnOpenCheckoutG=null;
    window.addEventListener('popstate', function () {
      paymentCheckoutG.close();
      paymentCheckoutG.remove();
      paymentCheckoutG.empty();
      this.val_general=0;
    });

    </script>`)
  }

  donateFrutas(){
    console.log("paid")
    var donate =this.val_frutas;
    console.log(donate)
    console.log("XXX")
    // if($('.payment-checkout-modal')!=null){
    //   $('.payment-checkout-modal').empty();
    //   $('.payment-checkout-modal').remove();
    // }
    // $('#response').innerHTML=""
    // $('#response').innerHTML=""
    postscribe('#response2', `
    <script> 
    console.log('postscribe')
    var paymentCheckoutG =""
    var paymentCheckoutG = new PaymentCheckout.modal({
    client_app_code: 'INNOVA-EC-CLIENT', // Client Credentials Provied by Paymentez
    client_app_key: 'ZjgaQCbgAzNF7k8Fb1Qf4yYLHUsePk', // Client Credentials Provied by Paymentez
    locale: 'es', // User's preferred language (es, en, pt). English will be used by default.
    env_mode: 'stg', 
    onOpen: function () {
      console.log('modal open');
      console.log('${donate}');
    },
    onClose: function () {
      console.log('modal closed');
      console.log('${donate}');
      this.val_general=0;
    },
    onResponse: function (response) { // The callback to invoke when the Checkout process is completed
      /*
        In Case of an error, this will be the response.
        response = {
          "error": {
            "type": "Server Error",
            "help": "Try Again Later",
            "description": "Sorry, there was a problem loading Checkout."
          }
        }

        When the User completes all the Flow in the Checkout, this will be the response.
        response = {
          "transaction":{
              "status": "success", // success or failure
              "id": "CB-81011", // transaction_id
              "status_detail": 3 // for the status detail please refer to: https://paymentez.github.io/api-doc/#status-details
          }
        }
      */
      console.log('modal response');
      document.getElementById('response').innerHTML = JSON.stringify(response);
    }
    });
    var btnOpenCheckoutG =""
    var btnOpenCheckoutG = document.querySelector('.js-payment-checkoutG');
    

      paymentCheckoutG.open({
        user_id: '1234',
        user_email: '', //optional
        user_phone: '', //optional
        order_description: 'donation',
        order_amount:${donate}*5,
        order_vat: 0,
        order_reference: '#234323411',
        //order_installments_type: 2, // optional: The installments type are only available for Equador. The valid values are: https://paymentez.github.io/api-doc/#installments-type
        //order_taxable_amount: 0, // optional: Only available for Datafast (Equador). The taxable amount, if it is zero, it is calculated on the total. Format: Decimal with two fraction digits.
        //order_tax_percentage: 10 // optional: Only available for Datafast (Equador). The tax percentage to be applied to this order.
      });
    
    btnOpenCheckoutG=null;
    window.addEventListener('popstate', function () {
      paymentCheckoutG.close();
      paymentCheckoutG.remove();
      paymentCheckoutG.empty();
      this.val_general=0;
    });

    </script>`)
  }

 
  ngAfterViewInit() {
   
  }

  open(content) {
    var myCard = $('#my-card');
    console.log("xxx");
    this.modalService.open(content,{ size: 'lg' });
  }
  

}
