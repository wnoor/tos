# PreviousOpen 
input aggregationPeriod = AggregationPeriod.DAY;
input length = 1;
input displace = -1;
input showOnlyLastDay = yes;
input label = "Previous Open ";
input showLabel = yes;

plot PrevDayOpen;
if showOnlyLastDay and !IsNaN(close(period = aggregationPeriod)[-1]) {
    PrevDayOpen = Double.NaN;
} else {
    PrevDayOpen = Highest(open(period = aggregationPeriod)[-displace], length);
}
PrevDayOpen.SetDefaultColor(getColor(3));
PrevDayOpen.SetPaintingStrategy(PaintingStrategy.HORIZONTAL);
AddLabel(showLabel,label + PrevDayOpen,Color.CURRENT);
