# Pervious Low
input aggregationPeriod = AggregationPeriod.DAY;
input length = 1;
input displace = -1;
input showOnlyLastDay = yes;
input label = "Previous Low ";
input showLabel = yes;

plot PrevDayLow;
if showOnlyLastDay and !IsNaN(low(period = aggregationPeriod)[-1]) {
    PrevDayLow = Double.NaN;
} else {
    PrevDayLow = low(period = aggregationPeriod)[-displace];
}
PrevDayLow.SetDefaultColor(getColor(5));
PrevDayLow.SetPaintingStrategy(PaintingStrategy.HORIZONTAL);
AddLabel(showLabel,label + PrevDayLow,Color.CURRENT);
