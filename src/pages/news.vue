<template>
    <div>
        <div v-for="(item ,index) in list" :key="index">
            <div style="color:#ffaaaa;">{{item.name}}</div>
            <div v-for="(item2,index2) in item.items" :key="index2">
                <div style="color:#aaffaa;">{{item2.a}}</div>
                <div style="color:#aaaaff;">{{item2.c.d}}</div>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    data(){
        return {
            list:[
                {
                    name:12,
                    title:13,
                    items:[
                        {
                            a:121,
                            b:122,
                            c:{
                                d:1231,
                                e:1232
                            }
                        },
                        {
                            a:131,
                            b:132,
                            c:{
                                d:1331,
                                e:1332
                            }
                        }
                    ]
                },
                {
                    name:22,
                    title:23,
                    items:[
                        {
                            a:221,
                            b:222,
                            c:{
                                d:2231,
                                e:2232
                            }
                        },
                        {
                            a:231,
                            b:232,
                            c:{
                                d:2331,
                                e:2332
                            }
                        }
                    ]
                },
            ]
        }
    }
}
</script>
<style scoped>

</style>
