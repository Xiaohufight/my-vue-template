<template>
    <div class = "home">
        <line-charts class="lCharts" :lineChartData="lineChartData"></line-charts>
    </div>
</template>

<script>
import LineCharts from './components/LineCharts'
import { getLineData } from '@/api/home'

export default {
    data() {
        return {
            lineChartData:{}
        }
    },
    created() {
        this._getAllData()
    },
    components: {
        LineCharts
    },
    methods: {
        _getAllData() {
            this.$http
                .all([getLineData()])
                .then(
                    this.$http.spread((lineData) => {
                        this.lineChartData = lineData.data.data
                    })
                )
        }
    }
}
</script>