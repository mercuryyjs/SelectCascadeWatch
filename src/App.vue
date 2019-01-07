<template>
  <div id="app">
    <el-form ref="form" :model="form" label-width="20px">
      <el-row>
        <el-col :span="4">
          <el-form-item label="省">
            <el-select v-model="form.firstModel" placeholder="请选择省份"> <el-option :label="item.name" :value="item.id" v-for="item in form.firstOptions" :key="item.id"></el-option> </el-select>
          </el-form-item>
        </el-col>
        <el-col :span="4">
          <el-form-item label="市">
            <el-select v-model="form.secondModel" placeholder="请选择市"> <el-option :label="item.name" :value="item.id" v-for="item in form.secondOptions" :key="item.id"></el-option> </el-select>
          </el-form-item>
        </el-col>
        <el-col :span="4">
          <el-form-item label="县">
            <el-select v-model="form.thirdModel" placeholder="请选择县"> <el-option :label="item.name" :value="item.id" v-for="item in form.thirdOptions" :key="item.id"></el-option> </el-select>
          </el-form-item>
        </el-col>
      </el-row>
    </el-form>
    <SelectCascadeWatch
      :firstModel="form.firstModel"
      :secondModel.sync="form.secondModel"
      :thirdModel.sync="form.thirdModel"
      @updateSecondOptions="getSecondOptions"
      @updateThirdOptions="getThirdOptions"
    ></SelectCascadeWatch>
  </div>
</template>

<script>
const firstOptions = [
  {
    id: 1,
    name: '江苏省',
  },
  {
    id: 2,
    name: '山东省',
  },
  {
    id: 3,
    name: '安徽省',
  },
]
const secondOptions = {
  1: [{ id: 1, name: '苏州' }, { id: 2, name: '南京' }],
  2: [{ id: 1, name: '烟台' }, { id: 2, name: '青岛' }],
  3: [{ id: 1, name: '合肥' }, { id: 2, name: '蚌埠' }],
}
const thirdOptions = {
  1: [{ id: 1, name: '高新区' }, { id: 2, name: '园区' }],
  2: [{ id: 1, name: '鼓楼区' }, { id: 2, name: '江宁区' }],
}
export default {
  name: 'app',
  data() {
    return {
      form: {
        firstModel: '',
        secondModel: '',
        thirdModel: '',
        firstOptions: [],
        secondOptions: [],
        thirdOptions: [],
      },
    }
  },
  created() {
    this.getFirstOptions()
  },
  methods: {
    getFirstOptions() {
      setTimeout(() => {
        this.form.firstOptions = firstOptions
      })
    },
    getSecondOptions(id) {
      setTimeout(() => {
        this.form.secondOptions = secondOptions[id]
      })
    },
    getThirdOptions(id) {
      setTimeout(() => {
        this.form.thirdOptions = thirdOptions[id]
      })
    },
  },
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

h1, h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}
</style>
