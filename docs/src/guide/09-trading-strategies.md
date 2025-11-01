# Trading Strategies: Systems That Work

> **Core Truth:** A mediocre strategy executed consistently beats a brilliant strategy executed randomly. Discipline > Intelligence.

## Introduction

After 15+ years of trading, I've tested hundreds of strategies. Most failed. Some worked temporarily. A few have stood the test of time.

This guide shares battle-tested strategies that actually work in crypto markets. But remember: **The strategy isn't the edge. Your execution of the strategy is the edge.**

## What Makes a Good Trading Strategy?

### Essential Components

Every profitable strategy must have:

1. **Clear Entry Rules**
   - Objective criteria
   - No ambiguity
   - Repeatable
   - Backtestable

2. **Defined Exit Rules**
   - Stop loss placement
   - Profit targets
   - Time-based exits
   - No hope or guessing

3. **Position Sizing Formula**
   - Risk per trade
   - Account-based calculation
   - Adjusts with account size

4. **Risk Management Framework**
   - Maximum drawdown limit
   - Portfolio heat management
   - Correlation awareness

5. **Market Context Filter**
   - When to trade
   - When to stand aside
   - Market condition recognition

6. **Edge Documentation**
   - Why it works
   - When it works best
   - When it fails
   - Historical performance

### Strategy Performance Metrics

**Don't just track win rate.** Track these:

- **Win Rate:** % of profitable trades (40-60% is normal)
- **Average Win:** Mean profit per winning trade
- **Average Loss:** Mean loss per losing trade
- **Profit Factor:** (Total Wins / Total Losses) - Aim for 1.5+
- **Risk/Reward Ratio:** Average win / Average loss - Aim for 2:1+
- **Maximum Drawdown:** Largest peak-to-trough decline
- **Sharpe Ratio:** Risk-adjusted returns
- **Recovery Time:** How long to recover from drawdowns
- **Trade Frequency:** How often strategy triggers

**Example of Good Strategy:**
```
Win Rate: 45%
Average Win: $300
Average Loss: $100
Profit Factor: 2.25
Risk/Reward: 3:1
Max Drawdown: 15%
Sharpe Ratio: 1.8
```

**This is profitable!** 45% win rate with 3:1 R/R = consistent profits.

## Strategy #1: Trend Following (Beginner-Friendly)

### Overview

**Philosophy:** "The trend is your friend until it ends."

**Best For:**
- Beginners to intermediate
- Part-time traders
- Lower stress tolerance
- Swing trading (days to weeks)

**Win Rate:** 35-45%
**Risk/Reward:** 1:3 to 1:5
**Time Commitment:** 30 minutes daily

### The Rules

#### Entry Rules (ALL must be met)

1. **Higher Timeframe Trend**
   - Daily chart shows clear uptrend
   - Price above 50 MA and 200 MA
   - 50 MA above 200 MA (golden cross)
   - Making higher highs and higher lows

2. **Pullback to Support**
   - Price pulls back to key level:
     - Previous resistance (now support)
     - 50-period MA on 4H chart
     - Fibonacci 0.618 retracement
     - Rising trendline

3. **Reversal Signal**
   - Bullish candlestick pattern forms:
     - Hammer
     - Bullish engulfing
     - Morning star
   - Volume increases on reversal candle
   - RSI (14) bounces from 30-40 zone

4. **Confirmation**
   - Next candle closes above reversal candle high
   - This is your entry trigger
   - Enter at market or limit slightly above

#### Position Sizing

```
Risk per trade: 2% of account
Entry: $42,000
Stop loss: $40,500 (below support)
Distance: $1,500

Position size = (Account × 0.02) / $1,500
Example: ($10,000 × 0.02) / $1,500 = 0.133 BTC
Position value: 0.133 × $42,000 = $5,586
```

#### Stop Loss Placement

**Place stop loss below:**
- The reversal candle low, OR
- The support level that held
- Add 1-2% buffer for volatility

**Never move stop loss down.** If price goes up, trail it up.

#### Take Profit Strategy

**Option A: Fixed Targets (Simpler)**
- TP1 (50%): Next resistance level (1:2 R/R minimum)
- TP2 (30%): Major resistance (1:4 R/R)
- TP3 (20%): Trailing stop for moonshots

**Option B: Trailing Stop (More upside)**
- Once up 1:1 (risk), move stop to breakeven
- Trail stop 15% below price
- Let winners run until stopped out

#### Exit Rules

**Exit if:**
- Stop loss hit (accept loss, move on)
- Profit targets hit (take profits)
- Daily candle closes below 50 MA (trend over)
- Better setup appears (reallocate capital)
- Hold time exceeds 3 weeks (reevaluate)

### Example Trade Walkthrough

**Setup:**
- BTC in uptrend on daily
- Pulls back from $50k to $46k
- Bounces at previous resistance ($46k)
- Hammer candle forms with volume
- Next candle closes above hammer

**Execution:**
- Entry: $46,500 (above confirmation candle)
- Stop: $45,000 (below hammer low + buffer)
- Risk: $1,500
- Target 1: $50,000 (1:2.3 R/R)
- Target 2: $54,000 (1:5 R/R)

**Outcome:**
- Price rallies to $51,000
- TP1 hit, sell 50% (+$4,500 profit on that portion)
- Trail stop on remaining 50%
- Stopped out at $49,500 (+$3,000 on remainder)
- Total profit: $7,500 on $20k position = 37.5%
- Account risk: 2% ($400)
- Actual gain: 3.75% (1.87:1 R/R on account)

### When This Strategy Works Best

✅ **Bull markets** - Trends are strong and sustained
✅ **Clear trends** - Not choppy, sideways markets
✅ **Major coins** - BTC, ETH (more predictable)
✅ **Higher timeframes** - Daily, weekly charts

### When This Strategy Struggles

❌ **Bear markets** - Uptrends are brief, often false
❌ **Choppy markets** - Whipsaws and stop hunts
❌ **Low liquidity coins** - Price manipulation
❌ **Lower timeframes** - Too much noise

### Pros and Cons

**Pros:**
- Simple to understand and execute
- Lower stress (not watching charts all day)
- Works with market momentum
- Good risk/reward ratios
- Beginner-friendly

**Cons:**
- Lower win rate (many breakouts fail)
- Requires patience (setups don't appear daily)
- Gives back profits in ranging markets
- Misses early trend entries

### Optimization Tips

1. **Add volume confirmation** - Requires 1.5× average volume on entry
2. **Use multiple timeframes** - Confirm on 3 timeframes
3. **Filter by volatility** - Only trade when ATR is expanding
4. **Screen for strength** - Focus on coins outperforming BTC
5. **Seasonal awareness** - Better in Q4/Q1 historically

---

## Strategy #2: Range Trading / Mean Reversion

### Overview

**Philosophy:** "What goes up must come down (in a range)."

**Best For:**
- Patient traders
- Analytical mindset
- Sideways markets
- Scalpers and day traders

**Win Rate:** 60-70%
**Risk/Reward:** 1:1.5 to 1:2
**Time Commitment:** 1-2 hours daily

### The Rules

#### Pre-Conditions

**Market must be ranging:**
- Clear support and resistance levels
- Price bouncing between levels 3+ times
- No clear trend on daily chart
- Bollinger Bands contracted (low volatility)
- Volume declining (coiling pattern)

**Don't trade ranges if:**
- Volume is increasing (breakout brewing)
- One side keeps getting tested (likely to break)
- Range is too tight (risk/reward poor)

#### Entry Rules

**Long Entry (at support):**
1. Price reaches support zone
2. RSI < 30 (oversold)
3. Stochastic crosses up
4. Bullish divergence (optional but adds confidence)
5. Reversal candle forms (hammer, doji, engulfing)
6. Enter on next candle close above reversal

**Short Entry (at resistance):**
1. Price reaches resistance zone
2. RSI > 70 (overbought)
3. Stochastic crosses down
4. Bearish divergence (optional)
5. Reversal candle forms (shooting star, doji, engulfing)
6. Enter on next candle close below reversal

#### Position Sizing

**More aggressive than trend following:**
- Risk: 1.5-2% per trade
- Higher win rate justifies slightly more risk
- Still never exceed 2%

#### Stop Loss Placement

**For Longs:**
- Below support zone (1-3% beyond)
- Below recent swing low
- Account for volatility (ATR)

**For Shorts:**
- Above resistance zone (1-3% beyond)
- Above recent swing high

#### Take Profit Strategy

**Conservative (Recommended):**
- Exit at opposite boundary
- Take 100% profit at resistance (if long)
- Don't get greedy

**Aggressive:**
- Exit 50% at mid-range
- Let 50% ride to opposite boundary
- Trail stop on second half

#### Exit Rules

**Exit immediately if:**
- Stop loss hit
- Target reached
- Range breaks (false signal)
- Volume spike (breakout coming)
- Outside event (news, etc.)

### Example Trade Walkthrough

**Setup:**
- ETH ranging between $2,300-$2,500 for 2 weeks
- Multiple touches on both sides
- Price drops to $2,310 (support zone)
- RSI at 28 (oversold)
- Bullish engulfing candle forms

**Execution:**
- Entry: $2,320 (above engulfing candle)
- Stop: $2,280 (below support)
- Risk: $40 per ETH
- Target: $2,480 (resistance zone)
- R/R: $160 / $40 = 1:4

**Outcome:**
- Price rallies to $2,470 over 3 days
- Exit at $2,470 (near resistance)
- Profit: $150 per ETH
- Risk was $40, made $150 = 3.75:1 actual R/R

### When This Strategy Works Best

✅ **Sideways markets** - 60% of the time markets range
✅ **Lower volatility** - Predictable bounces
✅ **Liquid markets** - BTC, ETH, major alts
✅ **After strong trends** - Consolidation periods

### When This Strategy Struggles

❌ **Strong trends** - Ranges break, losses mount
❌ **High volatility** - Wide stops, poor R/R
❌ **Low liquidity** - Fake breakouts common
❌ **News-driven markets** - Unpredictable breaks

### Pros and Cons

**Pros:**
- High win rate (feels good)
- Predictable risk/reward
- Works in most market conditions (60% of time)
- Quick trades (hours to days)
- Clear entry/exit points

**Cons:**
- Smaller profits per trade
- Can get caught in breakouts
- Requires active monitoring
- Boring (not exciting)
- Ranges eventually break

---

## Strategy #3: Breakout Trading (Aggressive)

### Overview

**Philosophy:** "Catch the explosive move early."

**Best For:**
- Aggressive traders
- Full-time attention
- High risk tolerance
- Momentum lovers

**Win Rate:** 30-40%
**Risk/Reward:** 1:4 to 1:10
**Time Commitment:** 3+ hours daily

### The Rules

#### Pre-Conditions

**Look for consolidation:**
- Price consolidating for 2+ weeks
- Volatility contracting (Bollinger Bands squeezing)
- Volume declining during consolidation
- Clear resistance level being tested
- Pattern forming (triangle, flag, pennant)

#### Entry Rules (Conservative Breakout)

1. **Price breaks above resistance**
   - Candle closes above resistance level
   - Not just a wick through
   - Minimum 2% above resistance

2. **Volume Confirmation**
   - Volume 1.5× average or higher
   - Shows conviction, not fakeout
   - Essential for validity

3. **Momentum Confirmation**
   - RSI breaks above 50 (bullish)
   - MACD crosses bullish
   - Moving averages aligned

4. **Retest Entry (Safer)**
   - Wait for price to pull back
   - Former resistance becomes support
   - Enter on bounce off retest
   - Lower risk, miss some explosive moves

#### Entry Rules (Aggressive Breakout)

1. **Enter on breakout candle close**
   - Don't wait for retest
   - Higher risk, higher reward
   - Catch full move
   - Use wider stop

2. **Add on retest**
   - If retest occurs, add to position
   - Average in
   - Scale out strategy

#### Position Sizing

**Conservative approach:**
- Risk: 1.5% (waiting for retest)
- Confirmation reduces risk

**Aggressive approach:**
- Risk: 1% (entering on breakout)
- Lower risk per trade due to lower win rate
- More trades compensate

#### Stop Loss Placement

**Conservative (retest entry):**
- Below retest low
- Below previous resistance (now support)
- Tight stop (2-4%)

**Aggressive (breakout entry):**
- Below consolidation/pattern
- Wider stop (5-8%)
- Accounts for volatility

#### Take Profit Strategy

**Measured Move:**
- Measure height of consolidation/pattern
- Project upward from breakout point
- TP1: 1× height (50% position)
- TP2: 2× height (30% position)
- TP3: Trail stop (20% position)

**Example:**
```
Consolidation range: $38,000-$42,000 = $4,000 height
Breakout: $42,000
TP1: $46,000 (50% out)
TP2: $50,000 (30% out)
TP3: Trail remaining 20%
```

#### Exit Rules

**Exit if:**
- Stop loss hit (breakout failed)
- Price closes back inside pattern (false breakout)
- Volume dies (momentum gone)
- Major resistance hit earlier than expected
- Profit targets reached

### Example Trade Walkthrough

**Setup:**
- BTC consolidating in $38k-$42k for 3 weeks
- Ascending triangle forming
- Volume declining during pattern
- Multiple tests of $42k resistance

**Execution:**
- Breakout: Daily candle closes at $43,200
- Volume 2.1× average (strong)
- Enter: $43,500 (conservative, wait for next candle)
- Stop: $41,500 (below triangle)
- Risk: $2,000
- TP1: $46,000 (pattern height = $4k)
- TP2: $50,000
- TP3: Trail stop

**Outcome:**
- Price rallies to $48,500 over 5 days
- TP1 hit at $46,000 (50% out for $2,500 profit)
- Price pulls back to $44,000 (glad we took profits)
- Stopped out on remaining 50% at $43,800 (small gain)
- Total: $2,800 profit on $2,000 risk = 1.4:1 R/R
- Not amazing, but positive. Many breakouts do much better.

### When This Strategy Works Best

✅ **Bull markets** - Breakouts have follow-through
✅ **High volatility** - Big moves possible
✅ **After consolidation** - Energy built up
✅ **Clear patterns** - Obvious setups
✅ **Major news catalysts** - Fundamental driver

### When This Strategy Struggles

❌ **Choppy markets** - Fake breakouts everywhere
❌ **Bear markets** - Breakouts fail quickly
❌ **Low volume** - Weak breakouts
❌ **Over-traded patterns** - Everyone sees it (trap)

### Pros and Cons

**Pros:**
- Massive profit potential
- Catches big moves early
- Exciting (dopamine hit)
- Clear entry signals
- Defined risk

**Cons:**
- Low win rate (frustrating)
- Many false breakouts
- Requires quick action
- Emotional rollercoaster
- FOMO-inducing

---

## Strategy #4: Support/Resistance Bounce (Simple & Effective)

### Overview

**Philosophy:** "Buy support, sell resistance. Repeat."

**Best For:**
- Beginners
- Simple approach lovers
- Lower timeframe traders
- High-probability setups

**Win Rate:** 55-65%
**Risk/Reward:** 1:2 to 1:3
**Time Commitment:** 1 hour daily

### The Rules

#### Preparation

**Identify key levels weekly:**
1. Open weekly chart
2. Mark all obvious support levels (previous lows)
3. Mark all obvious resistance levels (previous highs)
4. Note round numbers ($40k, $50k, etc.)
5. Check where price is relative to these

**Only use OBVIOUS levels:**
- Price touched 3+ times
- Clear reactions (bounces/rejections)
- Visible on weekly/daily charts
- Not obscure or wishful thinking

#### Entry Rules (Long at Support)

1. **Price approaches support**
   - Within 1-2% of level
   - Preferably on declining volume (selling exhaustion)

2. **Reversal signal**
   - Bullish candlestick pattern
   - RSI bounces from 30-40 zone
   - Volume increases on bounce candle

3. **Enter on confirmation**
   - Next candle closes above signal candle
   - Market order or limit slightly above

#### Entry Rules (Short at Resistance)

1. **Price approaches resistance**
   - Within 1-2% of level
   - Preferably on declining volume (buying exhaustion)

2. **Rejection signal**
   - Bearish candlestick pattern
   - RSI rejects from 60-70 zone
   - Volume increases on rejection candle

3. **Enter on confirmation**
   - Next candle closes below signal candle

#### Position Sizing

- Standard: 2% risk per trade
- High-probability level: Can increase to 2.5%
- Unconfirmed level: Decrease to 1%

#### Stop Loss Placement

**For Longs:**
- 1-3% below support level
- Below recent swing low
- If stopped out, level is broken (good thing to know)

**For Shorts:**
- 1-3% above resistance level
- Above recent swing high

#### Take Profit Strategy

**Target nearest opposite level:**
- Long from support → Target next resistance
- Short from resistance → Target next support
- Exit 50% at 1:2 R/R
- Let 50% ride to full target

#### Exit Rules

- Stop hit (level broken, exit)
- Target hit (take profits)
- Price stalls mid-range (reevaluate)
- Major news (close if uncertain)

### Example Trade Walkthrough

**Setup:**
- ETH has bounced from $2,500 support 4 times in 2 months
- Price drops from $2,800 to $2,510
- Hammer candle forms at $2,505
- Volume increases 1.4× average
- RSI at 32

**Execution:**
- Entry: $2,525 (above hammer)
- Stop: $2,475 (below support)
- Risk: $50
- Target: $2,650 (next resistance)
- R/R: $125 / $50 = 2.5:1

**Outcome:**
- Price rallies to $2,655 over 4 days
- Exit at $2,650
- Profit: $125 per ETH
- Clean trade, textbook setup

### When This Strategy Works Best

✅ **All market conditions** - Always have S/R levels
✅ **Major levels** - Stronger reactions
✅ **Liquid coins** - Levels respected more
✅ **Clear levels** - Obvious to everyone

### When This Strategy Struggles

❌ **Trending markets** - Levels break more
❌ **High volatility** - Whipsaws through levels
❌ **New coins** - No history, no levels

### Pros and Cons

**Pros:**
- Extremely simple
- Works across timeframes
- High win rate
- Low stress
- Beginner-friendly
- Clear risk/reward

**Cons:**
- Levels eventually break
- Miss trending moves
- Requires patience
- Can be boring
- Many false signals at weak levels

---

## Strategy #5: Moving Average Crossover (Systematic)

### Overview

**Philosophy:** "Follow the algorithm, not emotions."

**Best For:**
- Systematic traders
- Emotion-prone traders
- Part-time traders
- Backtest lovers

**Win Rate:** 40-50%
**Risk/Reward:** 1:2.5+
**Time Commitment:** 15 minutes daily

### The Rules

**Moving Averages Used:**
- Fast MA: 20-period EMA
- Slow MA: 50-period EMA
- Trend Filter: 200-period SMA

**Timeframe:** Daily chart (for swing trading)

#### Entry Rules (Long)

**All conditions must be met:**
1. Price above 200 SMA (uptrend filter)
2. 20 EMA crosses above 50 EMA (golden cross)
3. Price pulls back to 20 EMA
4. Price bounces off 20 EMA (candle closes above)
5. Enter next candle open

#### Entry Rules (Short)

**All conditions must be met:**
1. Price below 200 SMA (downtrend filter)
2. 20 EMA crosses below 50 EMA (death cross)
3. Price rallies to 20 EMA
4. Price rejects from 20 EMA (candle closes below)
5. Enter next candle open

#### Position Sizing

- Risk: 2% per trade
- Mechanical system allows consistent sizing

#### Stop Loss Placement

**For Longs:**
- 2× ATR below entry, OR
- Below 50 EMA
- Whichever is closer

**For Shorts:**
- 2× ATR above entry, OR
- Above 50 EMA

#### Take Profit Strategy

**No price targets.** Use these exits:

**Exit Longs when:**
- 20 EMA crosses below 50 EMA (reverse signal)
- Price closes below 50 EMA
- Stop loss hit

**Exit Shorts when:**
- 20 EMA crosses above 50 EMA (reverse signal)
- Price closes above 50 EMA
- Stop loss hit

**OR use trailing stop:**
- Trail by 2× ATR
- Locks in profits
- Stays in strong trends

### Example Trade Walkthrough

**Setup:**
- BTC daily chart
- Price above 200 SMA ($35,000)
- 20 EMA crosses above 50 EMA at $40,000
- Price pulls back to 20 EMA ($41,500)
- Bounces with bullish candle

**Execution:**
- Entry: $42,000 (next open)
- Stop: $40,000 (below 50 EMA)
- Risk: $2,000
- Exit: When 20 EMA crosses back below 50 EMA

**Outcome:**
- Price trends up to $52,000 over 6 weeks
- 20 EMA crosses below 50 EMA at $50,500
- Exit: $50,500
- Profit: $8,500
- Risk was $2,000 = 4.25:1 R/R

### Backtesting Results (BTC 2019-2023)

- Total Trades: 47
- Winners: 21 (45%)
- Losers: 26 (55%)
- Average Win: $6,200
- Average Loss: $1,800
- Profit Factor: 1.9
- Max Drawdown: 18%
- Annual Return: 32%

**Reality:** Simple systems work if you follow them consistently.

### When This Strategy Works Best

✅ **Trending markets** - Captures big moves
✅ **Bull markets** - Long bias works
✅ **Patient traders** - Signals are infrequent
✅ **Disciplined traders** - Must follow signals

### When This Strategy Struggles

❌ **Choppy markets** - Whipsaw losses
❌ **Range-bound** - Multiple false signals
❌ **Impatient traders** - Will overtrade

### Pros and Cons

**Pros:**
- Completely systematic (no emotion)
- Catches big trends
- Simple to follow
- Easy to backtest
- Proven over decades
- Time-efficient

**Cons:**
- Boring (no excitement)
- Give back profits in reversals
- Lag in entries/exits
- Frustrating in chop
- Requires discipline to follow

---

## Strategy #6: RSI Divergence (Advanced)

### Overview

**Philosophy:** "Price lies. Momentum tells the truth."

**Best For:**
- Experienced traders
- Pattern recognition skills
- Reversal traders
- Technical analysis lovers

**Win Rate:** 50-60%
**Risk/Reward:** 1:3 to 1:5
**Time Commitment:** 2 hours daily

### Understanding Divergences

**Bullish Divergence (Bottom Reversal):**
- Price makes lower low
- RSI makes higher low
- Momentum improving while price declining
- Buying pressure building
- Reversal up likely

**Bearish Divergence (Top Reversal):**
- Price makes higher high
- RSI makes lower high
- Momentum weakening while price rising
- Selling pressure building
- Reversal down likely

**Hidden Divergences (Trend Continuation):**
- Hidden Bullish: Price higher low, RSI lower low (uptrend continues)
- Hidden Bearish: Price lower high, RSI higher high (downtrend continues)

### The Rules

#### Entry Rules (Bullish Divergence)

1. **Identify divergence**
   - Price makes new low (or equal low)
   - RSI makes higher low
   - Connect the lows on both charts
   - Divergence is clear and obvious

2. **Confirm at support**
   - Divergence occurs at key support level
   - Previous reaction point
   - Round number
   - Fibonacci level

3. **RSI turns up**
   - RSI crosses above 30
   - Shows momentum shift
   - Buyers taking control

4. **Price confirmation**
   - Bullish candlestick pattern
   - Price breaks short-term downtrend
   - Enter on confirmation candle close

#### Entry Rules (Bearish Divergence)

1. **Identify divergence**
   - Price makes new high (or equal high)
   - RSI makes lower high
   - Clear divergence

2. **Confirm at resistance**
   - At key resistance level
   - Previous rejection point
   - Adds confluence

3. **RSI turns down**
   - RSI crosses below 70
   - Momentum shifting

4. **Price confirmation**
   - Bearish candlestick
   - Enter on confirmation

#### Position Sizing

- Risk: 2% per trade
- Strong divergence + confluence: 2.5%
- Weak divergence: 1.5%

#### Stop Loss Placement

**For Bullish Divergence:**
- Below the divergence low
- Add 1-2% buffer
- If this breaks, divergence invalidated

**For Bearish Divergence:**
- Above the divergence high
- Add 1-2% buffer

#### Take Profit Strategy

**Target key levels:**
- TP1 (50%): Nearest resistance (1:2 minimum)
- TP2 (30%): Major resistance
- TP3 (20%): Trail stop

**OR use previous swing:**
- Bullish: Target previous swing high
- Bearish: Target previous swing low

### Example Trade Walkthrough

**Setup:**
- ETH forms two lows: $2,400 and $2,350
- RSI at first low: 25
- RSI at second low: 32 (higher!)
- Bullish divergence confirmed
- Second low is at major support ($2,350)
- Hammer candle forms

**Execution:**
- Entry: $2,375 (above hammer)
- Stop: $2,310 (below divergence low)
- Risk: $65
- TP1: $2,540 (previous resistance) = 1:2.5 R/R
- TP2: $2,700 (major resistance) = 1:5 R/R

**Outcome:**
- Price rallies to $2,580 over 1 week
- TP1 hit, 50% out (+$165 on that portion)
- Remaining 50% stopped at breakeven on pullback
- Total profit: $82.50 per ETH on $65 risk = 1.27:1

### When This Strategy Works Best

✅ **Reversal points** - Tops and bottoms
✅ **Trending markets** - Pullbacks in trends
✅ **Key levels** - Divergence + S/R confluence
✅ **Higher timeframes** - Daily, 4H more reliable

### When This Strategy Struggles

❌ **Strong trends** - Divergences fail in strong momentum
❌ **Low timeframes** - Too many false signals
❌ **Choppy markets** - Inconsistent
❌ **Low volume** - Manipulated price action

### Pros and Cons

**Pros:**
- Catches reversals early
- Excellent risk/reward
- Works across all instruments
- High probability at key levels
- Satisfying when it works

**Cons:**
- Requires experience to spot
- Can be subjective
- Miss strong trend moves
- Fails in momentum markets
- Lower win rate in trending markets

---

## Strategy Selection Framework

### Choose Strategy Based On:

**Your Personality:**
- **Patient:** Trend Following, MA Crossover
- **Aggressive:** Breakout Trading
- **Analytical:** Range Trading, RSI Divergence
- **Simple:** Support/Resistance Bounce

**Your Time Availability:**
- **< 30 min/day:** MA Crossover
- **1 hour/day:** S/R Bounce, Trend Following
- **2-3 hours/day:** Range Trading, RSI Divergence
- **Full-time:** Breakout Trading

**Market Condition:**
- **Strong Uptrend:** Trend Following, Breakouts
- **Strong Downtrend:** Avoid longs, reverse strategies
- **Sideways:** Range Trading, S/R Bounce
- **Volatile:** Breakout Trading
- **Low Volatility:** Range Trading

**Your Experience:**
- **Beginner:** S/R Bounce, Trend Following
- **Intermediate:** MA Crossover, Range Trading
- **Advanced:** RSI Divergence, Breakouts

## Building Your Own Strategy

### Step-by-Step Process

#### 1. Define Your Edge

**Ask yourself:**
- What market inefficiency am I exploiting?
- Why does this work?
- What psychological bias creates this opportunity?
- What's my unique insight?

**Example edges:**
- Mean reversion (price returns to average)
- Momentum (trends persist)
- Overreaction (news creates extremes)
- Pattern recognition (history repeats)

#### 2. Create Entry Rules

**Make them objective:**
❌ "Enter when it looks good"
✅ "Enter when price crosses above 50 MA with RSI > 50 and volume > 1.5× average"

**Checklist format works best:**
- [ ] Condition 1
- [ ] Condition 2
- [ ] Condition 3
- If all checked, enter

#### 3. Create Exit Rules

**Three types of exits:**

**Stop Loss (Risk Management):**
- Technical level
- Percentage
- ATR-based
- Must be predefined

**Profit Target (Take Profit):**
- Fixed level
- Risk/reward ratio
- Technical target
- Can have multiple

**Trailing Stop (Maximize Wins):**
- Percentage trail
- ATR trail
- Moving average trail
- Let winners run

#### 4. Define Position Sizing

**Formula-based:**
```
Position Size = (Account × Risk%) / (Entry - Stop)
```

**Risk per trade:**
- Conservative: 1%
- Standard:
