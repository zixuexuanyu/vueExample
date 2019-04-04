<template>
    <div class="delall">
        <div class="delall-btn" @click="delAllBtn()">批量删除</div>
        <div class="delall-btn delall-btns" @click="delSure()" v-if="checkboxShow">确定</div>
        <div class="delall-btn delall-btnc" @click="delCancel()" v-if="checkboxShow">取消</div>
        <ul class="delall-ul">
            <li class="delall-li" v-for="(item,index) in list" :key="index">
                <label class="delall-label" v-if="checkboxShow"> 
                    <input type="checkbox" name="checkbox" class="delall-checkbox" :value="item.id" @click="changecheckbox($event)"/>
                    <span class="delall-span"></span>
                </label>
                <p class="delall-p">{{item.name}}</p>
            </li>
        </ul>
        <img v-for="img in imgs" :src="img"  alt="">
    </div>
</template>
<script>
export default {
    data(){
        return {
            list: [{
                id:1,
                name: "养护液1",
                money: 10,
                title: "养护液1",
                selected: true
            }, {
                id:2,
                name: "养护液2",
                money: 10,
                title: "养护液2",
                selected: false
            }, {
                id:3,
                name: "养护液3",
                money: 10,
                title: "养护液3",
                selected: true
            }],
            checkboxShow:false,
            delList:[],//批量删除集合,
            imgs:[require('../assets/img/a.jpg'),require('../assets/img/a.jpg')]
        }
    },
    methods:{
        //选中
        changecheckbox(e){
            console.log(e.target.value)
            if(e.target.checked){
                this.delList.push(e.target.value);
            }else{
                var index = (this.delList).indexOf(e.target.value);
                if (index > -1) {
                    (this.delList).splice(index, 1);
                }
            }
            
        },
        //批量删除
        delAllBtn(){
            this.checkboxShow=true;
        },
        delSure(){
            console.log(this.delList)
        },
        delCancel(){
            this.delList=[];
            this.checkboxShow=false;
        }
    }
}
</script>
<style scoped>
img{
    width: 50px;
}
.delall{
    padding: 0;
    margin: 0;
}
.delall-btn{
    padding: 5px 20px;
    border-radius: 5px;
    background: #6666ff;
    color: #ffffff;    
    width: 72px;
    text-align: center;
    margin: 10px;
    display: inline-block;
}
.delall-btns{
    background: #ff6666;
}
.delall-btnc{
    background: #bbbbbb;
    color: #666666;
}
.delall-ul{
    list-style: none;
    border-top: #f6f6f6 solid 1px;
}
.delall-li{
    padding: 10px;
    display: flex;
    align-items: center;
    border-bottom: #f6f6f6 solid 1px
}
.delall-label{
    display: flex;
    position: relative;
    margin-right: 10px;
}
.delall-span{
    display: inline-block;
    width: 20px;
    height: 20px;
    background: #ffffff;
    border: #aaaaaa solid 1px;
    border-radius: 50%;
}
.delall-checkbox{
    visibility: hidden;
    position: absolute;
}
.delall-checkbox:checked ~ .delall-span{
    /* background: #aaaaff; */
    border: #000000 solid 1px;
    background-image: url(../assets/img/a.jpg);
    background-repeat: no-repeat;
    background-size: cover;
}
.delall-p{
    display: inline-block;
    margin: 0;
}

</style>
