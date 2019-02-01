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
                <div class="delall-numbox" v-if="checkboxShow">
                    <button class="delall-numbtn" @click="changeNum(false,item)">-</button>
                    <input type="number" class="delall-numbinput" :value="item.num" >
                    <!-- <span>{{item.num}}</span> -->
                    <button class="delall-numbtn" @click="changeNum(true,item)">+</button>
                </div>
            </li>
        </ul>
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
            numChangeShow:false,
            delList:[],//批量删除集合
            delListid:[]
        }
    },
    beforeMount() {
        let that=this;
        var list=that.list;
        for(var i=0;i<list.length;i++){
            this.$set(list[i], 'num', 1);
        }
        that.list=list;
        console.log(that.list)
    },
    methods:{
        //选中
        changecheckbox(e){
            console.log(e.target.value)
            if(e.target.checked){
                this.delListid.push(e.target.value);
            }else{
                var index = (this.delListid).indexOf(e.target.value);
                if (index > -1) {
                    (this.delListid).splice(index, 1);
                }
            }
            
        },
        changeNum: function (isAdd, item) {
            var num = item.num;
            console.log(num)

            if (isAdd ) {
                this.$set(item, 'num', ++num);
            } else if (!isAdd) {
                if(item.num==0){
                    this.$set(item, 'num', 0);
                }else{
                    this.$set(item, 'num', --num);
                }
            }
            console.log(this.list)
        },
        //批量删除
        delAllBtn(){
            this.checkboxShow=true;
        },
        //确定
        delSure(){
            console.log(this.delListid);
            for(var i=0;i<this.list.length;i++){
                for(var j=0;j<this.delListid.length;j++){
                    if(this.delListid[j]==this.list[i].id){
                        this.delList.push(this.list[i])
                    }
                }
            }
            console.log(this.delList)
        },
        //取消
        delCancel(){
            this.delListid=[];
            this.checkboxShow=false;
        }
    }
}
</script>
<style scoped>
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
    border-bottom: #f6f6f6 solid 1px;
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
.delall-numbox{
    margin-left: 200px;
}
.delall-numbinput{
    width: 20px;
    text-align: center;
}

</style>
