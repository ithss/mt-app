<template>
    <div class="wrapper">
        <el-row class="wr">
            <el-col :span="6" class="imgWrap">
                <a href="#">
                    <img src="//s0.meituan.net/bs/fe-web-meituan/fa5f0f0/img/logo.png" alt="美团">
                </a>
            </el-col>
            <el-col :span="14" class="searchArea">
                <el-row>
                    <el-col :span="16">
                        <el-input 
                            @focus="handleFocus"
                            @blur="handleBlur"
                            @input="handleInput"
                            :value="input"
                            @change="handleChange"
                            placeholder="搜索商家或地点">
                        </el-input>
                        <div class="about" v-if="isAbout">
                            <ul>
                                <li v-for="(item, index) in list" :key="item+index">{{item}}</li>
                            </ul>
                        </div>
                        <div class="hotSearch" v-if="flag">   
                            <h4>热门搜索</h4>
                            <dl>
                                <dd>水立方嬉水乐园</dd>
                                <dd>故宫博物院</dd>
                                <dd>故宫太平洋海底世界</dd>
                                <dd>博览馆</dd>
                                <dd>八达岭长城</dd>
                            </dl>
                        </div>
                        
                    </el-col>
                    <el-col :span="4">
                        <el-button icon="el-icon-search" type="warning"></el-button>
                    </el-col>
                    
                </el-row>
                <el-row>
                    <ul class="suggestion">
                        <li>水立方嬉水乐园</li>
                        <li>故宫博物院</li>
                        <li>故宫太平洋海底世界</li>
                        <li>博览馆</li>
                        <li>八达岭长城</li>
                    </ul>
                </el-row>
            </el-col>
        </el-row>
    </div>
</template>

<script>
export default {
    data() {
        return {
            flag: false,
            isAbout: false,
            input: '',
            list: []
        }
    },
    computed: {

    },
    methods: {
        handleInput(val) {
            this.input = val;
            setTimeout(() => {
               this.flag = false;
               this.isAbout = true;
               //请求数据 list
               this.list = ['japan', 'bejing', 'newyork', 'paris']
           }, 50);
           console.log(this.list)
        },
        handleFocus() {
            this.flag = true;
        },
        handleBlur() {
            this.flag = false;
            this.isAbout = false;
            this.list = [];
        },
        handleSelect() {

        },
        handleChange() {
            console.log('change')

        }
    },
    created() {

    },
}
</script>

<style lang="scss">
    .wrapper{
        width: 80%;
        margin: auto;
        .wr{

            min-width: 700px;
            
       
        .imgWrap{
            img{
                height: 50px;
                width: 126px;
            }
        }
        .searchArea{
            margin-left: 50px;
            min-width: 400px;
            input{
                border-right: none;
            }
            .about{
                position: absolute;
                background: #fff;
                width: 100%;
                ul{ 
                    display: flex;
                    flex-direction: column;
                    li{
                        list-style: none; 
                        font-size: 12px;
                        line-height: 20px;
                        padding: 2px 5px;
                    }
                }
            }
            .hotSearch{
                 position: absolute;
                 z-index: 1;
                 background: #fff;
                h4{
                    color: #999;
                    font-size: 13px;
                    margin: 5px 0;
                }
                dl{
                    display: flex;
                    justify-content: space-between;
                    dd{ 
                        margin-right: 5px;
                        font-size: 12px;
                        white-space: nowrap;
                    }
                
            }

            }
        }
        .suggestion{
            display: flex;
            margin: 5px 15px;
            li{
                list-style-type: none;
                margin-right: 5px;
                font-size: 12px;
                color: #999;
                &:hover{
                    color: orange;
                }
                
            }
        }
    }
    }    
</style>