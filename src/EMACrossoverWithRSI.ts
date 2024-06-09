#
# Buy/Sell signals based on EMA and RSI
# Generate signal when long term ema crosses over short term ema and RSI is less than 70 for buy and greater than 30 for sell 
#   

input shortTermLength = 50;
input longTermLength = 200;
input price = close; 

input length = 14;
# https://toslc.thinkorswim.com/center/reference/Tech-Indicators/studies-library/V-Z/WildersSmoothing
input averageType = AverageType.WILDERS;

def netAverageChange = MovingAverage(averageType, price - price[1], length);
def totalAverageChange = MovingAverage(averageType, AbsValue(price - price[1]), length);
def changeRatio = if totalAverageChange != 0 then netAverageChange / totalAverageChange else 0;

def rsivalue = 50 * (changeRatio + 1);


def shortTermEMA = ExpAverage(price, shortTermLength);
def longTermEMA = ExpAverage(price, longTermLength);

plot BuySignal = if shortTermEMA crosses above longTermEMA and rsivalue < 70 then low else Double.Nan;
BuySignal.SetPaintingStrategy(PaintingStrategy.ARROW_UP);
BuySignal.SetDefaultColor(Color.GREEN);
BuySignal.SetLineWeight(3);

plot SellSignal = if shortTermEMA crosses below longTermEMA and rsivalue > 30 then high else Double.NaN;
SellSignal.SetPaintingStrategy(PaintingStrategy.ARROW_DOWN);
SellSignal.SetDefaultColor(Color.RED);
SellSignal.SetLineWeight(3);

