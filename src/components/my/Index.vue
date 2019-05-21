<template>
  <div class="my">
    <mt-cell class="field-row" v-for="f in fields" :key="f.name" :title="f.name" :value="f.value"/>
  </div>
</template>

<script>
export default {
  name: 'Index',
  mounted () {
    //this.getFields()
    this.axios.get('api/store/1').then((response) => {
      console.log(response.data.data)
      if(response.data.data){
        this.fields[2].value = response.data.data.keeperName
        this.fields[1].value = response.data.data.phone
        this.fields[0].value = response.data.data.name
      }
    }).catch((response) => {
      console.log(response)
    })
  },
  data () {
    return {
      fields: [
        {
          name: '店铺名称',
          value:  ''
        },
        {
          name: '联系电话',
          value: ''
        },
        {
          name: '注册人姓名',
          value: ''
        }
      ]
    }
  }
}

</script>

<style scoped lang="less">
  .my {
    padding-top: 20px;

    .field-row {
      border-bottom: 1px solid #DDDDDD;
    }
  }
</style>
