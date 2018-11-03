<template>
    <div>
        <div class="container">
            <div>
                <h1 class="margin-h1">
                    ใบรับเงินมัดจำ
                </h1>
            </div>
            <div class="row">
                <div class="col-md-6 col-12">
                    <div class="form-group">
                        <p class="article-set">เลขที่ใบเงินมัดจำ</p>
                        <input type="text" class="form-control">
                    </div>
                </div>
                <div class="col-md-6 col-12">
                    <div class="form-group">
                        <p class="article-set">เลขที่ใบกำกับภาษี</p>
                        <input type="number" class="form-control">
                    </div>
                </div>
            </div>
            <div class="row">
                <div class="col-md-6 col-12">
                    <div class="form-group">
                        <p class="article-set">ประเภทภาษี</p>
                        <select class="form-control">
                            <option value="1">ภาษีแยกนอก</option>
                            <option value="2">ภาษีรวมใน</option>
                            <option value="3">ภาษีอัตราศูนย์</option>
                        </select>
                    </div>
                </div>
                <div class="col-md-6 col-12">
                    <div class="form-group">
                        <p class="article-set">รหัสลูกค้า</p>
                        <input type="text" class="form-control">
                    </div>
                </div>
            </div>
            <div class="row">
                <div class="col-md-6 col-6">
                    <div class="form-group">
                        <p class="article-set">วันที่ออกเอกสาร</p>
                        <input type="date" class="form-control">
                    </div>
                </div>
                <div class="col-md-6 col-6">
                    <div class="form-group">
                        <p class="article-set">วันที่ใบกำกับภาษี</p>
                        <input type="date" class="form-control">
                    </div>
                </div>
            </div>
            <div class="row">
                <div class="col-md-12 col-12">
                    <div class="form-group">
                        <p class="article-set">ชื่อในการออกบิล</p>
                        <input type="text" class="form-control">
                    </div>
                </div>
            </div>
            <div class="row">
                <div class="col-md-12 col-12">
                    <div class="form-group">
                        <p class="article-set">ที่อยู่ในการออกบิล</p>
                        <textarea class="form-control" rows="5"></textarea>
                    </div>
                </div>
            </div>
            <div class="row">
                <div class="col-md-6 col-6">
                    <div class="form-group">
                        <p class="article-set">เลขที่ใบจอง</p>
                        <input type="text" class="form-control">
                    </div>
                </div>
                <div class="col-md-6 col-6">
                    <div class="form-group">
                        <p class="article-set">รหัสพนักงานขาย</p>
                        <input type="text" class="form-control">
                    </div>
                </div>
            </div>
            <div class="row information-part">
                <div class="col-md-6 col-6">
                    <div class="form-group">
                        <p class="article-set">แผนก</p>
                        <input class="form-control">
                    </div>
                </div>
                <div class="col-md-6 col-6">
                    <div class="form-group">
                        <p class="article-set">วันที่ส่งของ</p>
                        <input type="date" class="form-control">
                    </div>
                </div>
            </div>
            <hr>
            <div>
                <div class="row tax-head-part">
                    <div class="col-md-8 col-8">
                    </div>
                    <div class="col-md-4 col-4">
                        <div class="form-group">
                            <p class="tax-head">อัตราภาษีมูลค่าเพิ่ม</p>
                            <input type="number" class="form-control tax-head" v-model="taxrate">
                        </div>
                    </div>
                </div>
                <div class="row">
                    <div class="col-md-8 col-8">
                    </div>
                    <div class="col-md-4 col-4">
                        <div class="form-group">
                            <p class="tax-head">จำนวนเงินก่อนภาษี {{ valueBTax }} บาท</p>
                            <input type="number" class="form-control tax-head" v-model="valueBTax">
                        </div>
                    </div>
                </div>
                <div class="row">
                    <div class="col-md-8 col-8">
                    </div>
                    <div class="col-md-4 col-4">
                        <div class="form-group">
                            <p class="tax-head">ภาษีมูลค่าเพิ่ม {{ VAT }} บาท</p>
                        </div>
                    </div>
                </div>
                <div class="row">
                    <div class="col-md-8 col-8">
                    </div>
                    <div class="col-md-4 col-4">
                        <div class="form-group">
                            <p class="tax-head">มูลค่ารวมภาษี {{ includeTax }} บาท</p>
                        </div>
                    </div>
                </div>
                <div class="row tax-bottom-part">
                    <div class="col-md-8 col-8">
                    </div>
                    <div class="col-md-4 col-4">
                        <div class="form-group">
                            <p class="tax-head">ยอดเงินคงเหลือ {{ balance }} บาท</p>
                        </div>
                    </div>
                </div>
                <div class="alert alert-danger" role="alert">
                    A simple danger alert with <a href="#" class="alert-link">an example link</a>. Give it a click if you like.
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default{
        data(){
            return{
                taxrate:'0',
                valueBTax:'0',
                includeTax:this.valueBTax*(this.taxrate/100.00),
                VAT:this.includeTax-this.valueBTax,
                balance:'0',
                click:false
            }
        }
    }
</script>

<style>
.margin-h1 {
  margin-bottom: 7.5%;
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
    text-align:left; 
    margin-left: 5px
}
.tax-head {
    text-align: right;
}
</style>
