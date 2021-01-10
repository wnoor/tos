# Previous High
input aggregationPeriod = AggregationPeriod.DAY;
input length = 1;
input displace = -1;
input showOnlyLastDay = yes;
input label = "Previous High ";
input showLabel = yes;

plot PrevDayHigh;
if showOnlyLastDay and !IsNaN(high(period = aggregationPeriod)[-1]) {
    PrevDayHigh = Double.NaN;
} else {
    PrevDayHigh = high(period = aggregationPeriod)[-displace];
}
PrevDayHigh.SetDefaultColor(getColor(2));
PrevDayHigh.SetPaintingStrategy(PaintingStrategy.HORIZONTAL);
AddLabel(showLabel,label + PrevDayHigh,Color.CURRENT);
