import template from './chart.html';
import controller from './chart.controller';
import './chart.styl';
import _ from 'lodash';

let chartComponent = (d3Service, techanService) => {
    return {
        restrict:         'E',
        scope:            {},
                          template,
                          controller,
        controllerAs:     'chart',
        bindToController: true,

        /**
         *
         * @param $scope
         * @param $element
         * @param $attrs
         * @param {ChartController} chartCtrl
         */
        link: ($scope, $element, $attrs, chartCtrl) => {
            let yAxisTitle = $attrs.yAxisTitle || 'Points';

            // @TODO refactor to better promise handling to avoid the "callback hell"
            d3Service.d3().then((d3) => {
                chartCtrl.d3 = d3;

                techanService.techan().then((techan) => {
                    let margin   = {
                            top:    parseInt($attrs.top) || 20,
                            right:  parseInt($attrs.right) || 20,
                            bottom: parseInt($attrs.bottom) || 30,
                            left:   parseInt($attrs.left) || 65
                        },
                        width    = (parseInt($attrs.width) || 960) - margin.left - margin.right,
                        height   = (parseInt($attrs.height) || 500 ) - margin.top - margin.bottom,
                        x        = techan.scale.financetime()
                            .range([0, width])
                            .outerPadding(0),
                        y        = d3.scale.linear()
                            .range([height, 0]),
                        close    = techan.plot.close()
                            .xScale(x)
                            .yScale(y),
                        xAxis    = d3.svg.axis()
                            .scale(x)
                            .orient("bottom"),
                        yAxis    = d3.svg.axis()
                            .scale(y)
                            .orient("left"),
                        svg      = d3.select($element[0]).append("svg")
                            .attr("width", width + margin.left + margin.right)
                            .attr("height", height + margin.top + margin.bottom)
                            .append("g")
                            .attr("transform", "translate(" + margin.left + "," + margin.top + ")"),
                        accessor = close.accessor();

                    chartCtrl.loadChart($attrs.url, (data) => {
                        data = data.sort((a, b) => {
                            return d3.ascending(accessor.d(a), accessor.d(b));
                        });

                        x.domain(_.map(data, accessor.d));
                        y.domain(techan.scale.plot.ohlc(data, accessor).domain());

                        svg.append("g")
                            .datum(data)
                            .attr("class", "close")
                            .call(close);

                        svg.append("g")
                            .attr("class", "x axis")
                            .attr("transform", "translate(0," + height + ")")
                            .call(xAxis);

                        svg.append("g")
                            .attr("class", "y axis")
                            .call(yAxis)
                            .append("text")
                            .attr("transform", "rotate(-90)")
                            .attr("y", 6)
                            .attr("dy", ".71em")
                            .style("text-anchor", "end")
                            .text(yAxisTitle);
                    });
                });
            });
        }
    };
};

chartComponent.$inject = ['d3Service', 'techanService'];

export default chartComponent;
