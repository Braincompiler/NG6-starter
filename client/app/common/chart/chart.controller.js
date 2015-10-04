import _ from 'lodash';

class ChartController {
    isLoading:boolean  = true;
    isError:boolean    = false;
    dataStartDate:Date = null;
    dataEndDate:Date   = null;
    data:Array         = [];
    cb:Function        = _.noop;
    _d3                = null;

    constructor($http) {
        this.$http = $http;
    }

    set d3(d3) {
        this._d3 = d3;

        this.d3ParseDate = this._d3.time.format("%Y-%m-%d").parse;
    }

    loadChart(url:string, cb:Function) {
        this.cb        = cb;
        this.isLoading = true;
        this.$http.get(url).then((result) => {
            this.__prepareData(result.data.dataset);
        }, (err) => {
            console.error(err);
            this.isError = true;
        }).finally(() => {
            this.isLoading = false;
        });
    }

    __prepareData(dataset:Object) {
        // Since the Quandl API provide an array with column names we should assume the order of the columns is not guaranteed, so we have to find the indices
        let dateIdx     = dataset.column_names.indexOf('Date'),
            openIdx     = dataset.column_names.indexOf('Open'),
            highIdx     = dataset.column_names.indexOf('High'),
            lowIdx      = dataset.column_names.indexOf('Low'),
            closeIdx    = dataset.column_names.indexOf('Close'),
            adjCloseIdx = dataset.column_names.indexOf('Adjusted Close'), // not always available
            volumeIdx   = dataset.column_names.indexOf('Volume');

        this.dataStartDate = this.d3ParseDate(dataset.start_date);
        this.dataEndDate   = this.d3ParseDate(dataset.end_date);

        // techan needs the complete data so lets prepare it
        _.forEach(dataset.data, (row) => {
            this.data.push({
                date:   this.d3ParseDate(row[dateIdx]),
                open:   +row[openIdx],
                high:   +row[highIdx],
                low:    +row[lowIdx],
                close:  +row[closeIdx],
                volume: +row[volumeIdx]
            });
        });

        this.cb(this.data);
    }
}

ChartController.$inject = ['$http'];

export default ChartController;
