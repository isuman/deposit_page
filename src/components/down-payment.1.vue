<template>
    <div>
        <div class="container">
            <div class="row">
              <div class="col-8">
                <div class="card">
                    <div class="card-header deposit-header">
                            ใบรับเงินมัดจำ
                    </div>
                    <div class="card-body">
                            ใบรับเงินมัดจำ
                    </div>
                </div>
              </div>
              <div class="col-md-4">
                    <div class="list-group-item deposit-header">
                        <h3>
                            สรุปยอดเงิน
                        </h3>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import api from "../service/service.js";

export default {
  data() {
    return {
      taxrate: 7.0,
      valueBTax: 100.0,
      balance: 0,
      click: false,
      username: "",
      company: "",
      date: ""
    };
  },
  methods: {
    checkdate() {
      alert(this.date);
    },
    convertToBaht(val) {
      var result = numeral(val).format("0,0.00");
      // console.log(typeof result)
      return result;
    },
    calltestapi() {
      var payload = {
        name: "ddd"
      };
      api.loginAX(
        "livermoo",
        "1234",
        result => {
          this.username = result.data.username;
          this.company = result.data.company_name;
        },
        error => {
          console.log(error);
        }
      );
    }
  },
  computed: {
    VAT() {
      return this.valueBTax * (this.taxrate / 100);
    },
    includeVAT() {
      return this.valueBTax + this.VAT;
    }
  }
};
</script>

<style>
.deposit-border {
  border-color: #0275d8;
  padding: 0% 2%;
}
.deposit-header {
  margin-bottom: 7.5%;
  background-color: #0275d8;
  border-color: #0275d8;
  color: aliceblue;
  text-align: left;
}
.information-part {
  margin-bottom: 5%;
}
.tax-head-part {
  margin-top: 5%;
}
.tax-bottom-part {
  margin-bottom: 5%;
}
.article-set {
  text-align: right;
  margin-left: 5px;
}
.tax-head {
  text-align: right;
}
.tax-summary {
  font-weight: bold;
  text-align: right;
  text-decoration: underline;
  text-decoration-style: double;
}
</style>
