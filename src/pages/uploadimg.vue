<template>
    <div>
        <input type="file" accept="image/*" id="capture" @change="uploads($event)">
        <img id="target" ref="target">

        <!-- <input type="file" @change="uploadimg($event)"/>
        <img :src="imgs"/> -->
    </div>
</template>
<script>
import lrz from 'lrz'
export default {
    data(){
        return {
            msg:'upload',
            imgs:''
        }
    },
    methods:{
        // upload(){}
        uploads(event){
            let targetObj = document.getElementById('target');
            const wrapWidth = targetObj.width;
            const wrapHeight = targetObj.height;
            const wrapRatio = (wrapWidth / wrapHeight) || 1;
            // 压缩图片
            lrz(file, { width: 200 }).then(function(rst) {
                console.log(rst,'rst')
                imgdataform=rst.formData;
                let config = {
                    headers: {
                        'Content-Type': 'multipart/form-data'
                    }
                }
                axios.post(apiUrl+'/page/admin/fastUploadFile',imgdataform,config)
                    .then((res) => {
                        console.log(res, 'res')
                        console.log(res.data.data,'---图片地址')
                        that.imguris = res.data.data
                        if(res.data.stateCode === 200){
                            // console.log("成功")
                        }
                    }).catch((res)=>{
                        console.log(res,'erro')
                    })
            }).always(function() {
                // 清空文件上传控件的值
                e.target.value = null;
            })
            // this.clip(event, {
            //     resultObj: targetObj,
            //     zoomable: true,
            //     zoomOnWheel: true,
            //     aspectRatio: wrapRatio,
            //     onFinishCrop: (imgData) => {
            //         console.log(imgData)
            //         // axios.post('https://test.yueyongyueyou.com/page/admin/fastUploadFile', Qs.stringify(imgData))
            //         // .then(response => {
            //         //     console.log(response.data);
            //         // }, err => {
            //         //     console.log(err)
            //         // })
            //         // do finishcrop thing
            //         // imgData 是 压缩后的base64图片
            //     }
            // });
        },
        uploadimg(e){
            let file=e.target.files[0];
            let that=this;
            console.log(file,'file')
            lrz(file, { width: 200 }).then(function(rst) {
                console.log(rst,'rst')
                that.imgs=rst.base64
                
            }).always(function() {
                // 清空文件上传控件的值
                e.target.value = null;
            })
        }
    }
}
</script>
<style >
    img{
        width: 100px;
    }
</style>

