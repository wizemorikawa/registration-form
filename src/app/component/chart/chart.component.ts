import * as d3 from "d3";

import { Component, ElementRef, ViewChild, ChangeDetectorRef } from "../../../../node_modules/@angular/core";
// import { select } from "../../../../node_modules/@types/d3-selection";
// import { min, max } from "../../../../node_modules/@types/d3-array";
// import { scaleLinear } from "../../../../node_modules/@types/d3-scale";
// import { line } from "../../../../node_modules/@types/d3";
// import {svg, select, scaleLinear} from "../../../../node_modules/@types/d3";




// export interface ChartPoint {
//     x: number;
//     y: number;
// }

// export type ChartData = ChartPoint[];

// export interface ChartOptions {
//     width?: number | string;
//     height?: number | string;
//     strokeColor?: string;
//     margin?: number | [number, number , number, number];
//     animateDuration?: number;
// }

@Component({
    selector: 'app-chart',
    templateUrl: 'chart.component.html'
})
export class MultiLineChartComponent {

   // @ViewChild('chart') svgElement: any;

    svg;

    datas = [10, 70, 50, 60 , 20, 80, 40, 60, 80, 100];
    margin = 2;

    constructor(private cd: ChangeDetectorRef) {
        this.init();
    }

    init(): void {
        this.svg = d3.select('#chart')
        .append('svg')
        .attr('width', 100)
        .attr('height', 100);
        console.log('##########');
        console.log(this.svg);

        const yMin = d3.min(this.datas);
        const yMax = d3.max(this.datas);

        const xscale = d3.scaleLinear().domain([0, this.datas.length]).range([this.margin, 100 - this.margin]);
        const yscale = d3.scaleLinear().domain([yMin, yMax]).range([100 - this.margin, this.margin]);

        console.log(xscale(3));
        console.log(yscale(30));

        const d3Line = d3.line()
        .x((d, i) => xscale(d[0]))
        .y((d, i) => yscale(d[1]));
        const listData = [];
        for (let i = 0; i < this.datas.length; i++) {
            listData.push([i, this.datas[i]]);
        }

        this.svg.append('path')
        .attr('d', d3Line(listData))
        .style('stroke', 'black')
        .style('fill', 'none');

    }

}
