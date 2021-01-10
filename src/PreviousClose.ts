# 
# Script to show previous close price
input aggregationPeriod = AggregationPeriod.DAY;
input length = 1;
input displace = -1;
input showOnlyLastDay = yes;
input label = "Previous Close ";
input showLabel = yes;

plot PrevDayClose;
if showOnlyLastDay and !IsNaN(close(period = aggregationPeriod)[-1]) {
    PrevDayClose = Double.NaN;
} else {
    PrevDayClose = Highest(close(period = aggregationPeriod)[-displace], length);
}
PrevDayClose.SetDefaultColor(getColor(2));
PrevDayClose.SetPaintingStrategy(PaintingStrategy.HORIZONTAL);
AddLabel(showLabel,label + PrevDayClose,Color.CURRENT);
