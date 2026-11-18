/* Per-chapter study content for Vindhi.
   Edit this file to add videos, change the key slides or attach voice notes.

   videos : YouTube videos shown in the Videos tab. `id` is the part after v= in the URL.
   Audio : the spoken walkthrough of each chapter is listed in VINDHI_AUDIO at the bottom of this file.
            The words are in narration.js and the mp3 files are in materials/voice-notes/.
   slide  : the "key slide" (ideas, formulas, exam watch-outs, one worked example). */
window.VINDHI_CONTENT = {
  1: {
    videos: [
      { id: 'fSmedyVv-Us', title: 'Sampling Methods 101: Probability & Non-Probability Sampling Explained Simply', channel: 'Grad Coach', note: 'Matches Part 2: population vs sample and probability vs non-probability sampling.' },
      { id: 'TlMhoKbVzTY', title: 'STRATIFIED, SYSTEMATIC, and CLUSTER Random Sampling (12-4)', channel: 'Research By Design', note: 'The structured probability designs from Part 2.' },
      { id: 'XZo4xyJXCak', title: 'Introduction to Statistics', channel: 'The Organic Chemistry Tutor', note: 'A general refresher on the basic terms.' },
    ],
    slide: {
      title: 'Biostatistics and sampling',
      sub: 'Population vs sample, variables, experiments and how samples are chosen.',
      ideas: [
        'Statistics: collect, organise, present, analyse and interpret data to make decisions. Biostatistics applies this to biology, medicine and biotechnology.',
        'Population = everyone of interest; sample = the part you measure. A parameter describes the population, a statistic describes the sample.',
        'Variables: categorical (nominal, ordinal) or numerical (discrete, continuous). Scales: nominal, ordinal, interval, ratio.',
        'Independent (explanatory) variable is changed or used to predict; dependent (response) variable is the outcome.',
        'Experimental unit = smallest unit a treatment is applied to independently. Use randomisation and blocking.',
        'Probability sampling: simple random, systematic, stratified, cluster. Non-probability: convenience, snowball, quota, purposive.',
        'Descriptive statistics summarise data; inferential statistics draw conclusions about a population from a sample.',
      ],
      formulas: [
        'Systematic sampling: interval k = N / n',
        'Simple random sample: each unit has chance n / N',
        'Group difference = mean(B) − mean(A) (is it bigger than natural variation?)',
      ],
      traps: [
        'Random sampling supports generalising to the population; random assignment supports claiming cause.',
        'Many plants in one jar are not independent replicates. The jar is the experimental unit (pseudoreplication).',
        'Technical replicates are not biological replicates.',
        'Bias is a systematic error (selection, response). Random error is natural variation. A bigger sample does not fix bias.',
        'Non-probability samples: selection chances cannot be calculated.',
      ],
      example: 'Fertiliser trial: group A mean 24.8 cm, group B mean 27.1 cm, so B is 2.3 cm taller. Before concluding, ask about natural variation, sample size, fair selection and chance.',
    },
  },

  2: {
    videos: [
      { id: 'kn83BA7cRNM', title: 'Mean, Median, and Mode: Measures of Central Tendency: Crash Course Statistics #3', channel: 'CrashCourse', note: 'The central tendency section.' },
      { id: 'R4yfNi_8Kqw', title: 'Measures of Spread: Crash Course Statistics #4', channel: 'CrashCourse', note: 'The dispersion section: range, variance and standard deviation.' },
      { id: 'sHRBg6BhKjI', title: 'Why Dividing By N Underestimates the Variance', channel: 'StatQuest with Josh Starmer', note: 'Why the sample variance divides by n − 1.' },
      { id: 'qBigTkBLU6g', title: 'StatQuest: Histograms, Clearly Explained', channel: 'StatQuest with Josh Starmer', note: 'Building and reading histograms.' },
      { id: 'EVm1NhGod1w', title: 'Box Plots — what they tell us and how to read them', channel: 'Settele Tutoring', note: 'Box plots and the five-number summary.' },
      { id: 'U0NZu6f5TMI', title: 'Skewness - Right, Left & Symmetric Distribution - Mean, Median, & Mode With Boxplots', channel: 'The Organic Chemistry Tutor', note: 'The skewness section.' },
    ],
    slide: {
      title: 'Descriptive statistics',
      sub: 'Summarise data with graphs and numbers.',
      ideas: [
        'One categorical variable: bar chart, pie chart, frequency table. One numerical variable: histogram, box plot, stem-and-leaf, line graph.',
        'Two variables: two-way table (both categorical), parallel box plots (categorical + numerical), scatter plot (both numerical).',
        'Histogram: equal-width classes, bars touching. Class width ≈ range ÷ number of classes.',
        'Five-number summary: minimum, Q1, median (Q2), Q3, maximum. Box plots also flag outliers.',
        'Centre: mean, median, mode. Spread: range, variance, standard deviation, coefficient of variation.',
        'Shape: skewness (positive = long right tail) and kurtosis (positive excess = leptokurtic).',
      ],
      formulas: [
        'x̄ = Σxᵢ / n',
        's² = Σ(xᵢ − x̄)² / (n − 1),   s = √s²',
        'CV = s / x̄',
        'Position of Qₚ = (p/100) × (n + 1); interpolate if not whole',
        'Sample skewness Sk = [ (1/n) Σ(xᵢ − x̄)³ ] / s³',
      ],
      traps: [
        'Bar chart bars have gaps; histogram bars touch.',
        'Sample variance divides by n − 1, not n.',
        'Skewed data or outliers: the median is more resistant than the mean.',
        'Do not delete outliers just because they change the result. Check whether it is a mistake or a real value.',
        'Pie charts suit few categories only.',
      ],
      example: 'Data 65, 72, 78, 80, 82, 85, 88, 90, 92, 95, 100 (n = 11): Q1 at position 3 = 78, median at position 6 = 85, Q3 at position 9 = 92.',
    },
  },

  3: {
    videos: [
      { id: 'Y8EOkJ75elM', title: 'Basic Probability Rules', channel: 'Michael Porinchak', note: 'The basic properties and rules from the notes.' },
      { id: 'o6vC9CauRPI', title: 'The Addition Rule of Probability (With Examples)', channel: "Zach's Math Zone", note: 'P(A ∪ B) with worked examples.' },
      { id: 'Jv_74Y-kBjU', title: 'Independence • Dependence and Conditional Probability', channel: 'Aggie Math', note: 'Independent vs dependent events and P(A | B).' },
      { id: 'BBPIQt5Tp48', title: 'Intro Stats 11B, Probability Addition Rule (Disjoint Events), Conditional Probability, Independence', channel: 'Bill Kinney', note: 'A single lecture covering addition, conditional and independence.' },
    ],
    slide: {
      title: 'Probability',
      sub: 'Events, rules, conditional probability and Bayes.',
      ideas: [
        'Sample space S = all outcomes. An event is a subset of S: simple (one outcome) or compound.',
        'Union A ∪ B = A or B or both. Intersection A ∩ B = both. Complement Aᶜ = not A.',
        'Mutually exclusive: A ∩ B = ∅. Collectively exhaustive: together they cover S.',
        'Joint = P(A ∩ B). Marginal = P(A) on its own. Conditional = P(A | B) given B has happened.',
        'Total probability splits an event across a partition B₁…B_k. Bayes reverses a conditional.',
        'Contingency tables and tree diagrams make the arithmetic easier.',
      ],
      formulas: [
        '0 ≤ P(A) ≤ 1,   P(S) = 1,   P(Aᶜ) = 1 − P(A)',
        'P(A ∪ B) = P(A) + P(B) − P(A ∩ B)',
        'P(A | B) = P(A ∩ B) / P(B)',
        'P(A ∩ B) = P(A) P(B | A);  independent ⇒ P(A) P(B)',
        'P(A) = Σ P(A | Bᵢ) P(Bᵢ)',
        'P(Bᵢ | A) = P(A | Bᵢ) P(Bᵢ) / Σ P(A | Bⱼ) P(Bⱼ)',
      ],
      traps: [
        'Mutually exclusive is not the same as independent. If both are possible, exclusive events are dependent.',
        'Subtract the overlap once in the addition rule. If the events are exclusive, the overlap is 0.',
        'P(A | B) ≠ P(B | A) in general.',
        'Sensitivity = P(positive | disease); specificity = P(negative | no disease). P(disease | positive) needs Bayes and depends on prevalence.',
      ],
      example: 'Sensitivity 0.79, specificity 0.95, prevalence 0.04: P(disease | +) = 0.79×0.04 / (0.79×0.04 + 0.05×0.96) = 0.0316 / 0.0796 ≈ 0.40.',
    },
  },

  4: {
    videos: [
      { id: 'C9xB9HrrALA', title: 'Discrete Random Variable & Binomial Probabilities', channel: 'Ellen Smyth', note: 'Part 1: discrete random variables and the binomial.' },
      { id: 'P1X2WuJjG1o', title: 'BINOMIAL Probability Distribution for Discrete Random Variables (9-8)', channel: 'Research By Design', note: 'Binomial conditions, formula and examples.' },
      { id: 'w0aq8NYiT88', title: 'Statistics: The Mean (Lambda) of a Poisson Distribution Explained', channel: 'Linda Williams', note: 'How λ scales with the interval for the Poisson.' },
      { id: 'rzFX5NWojp0', title: 'The Normal Distribution, Clearly Explained!!!', channel: 'StatQuest with Josh Starmer', note: 'Part 2: the normal distribution.' },
    ],
    slide: {
      title: 'Random variables and distributions',
      sub: 'Binomial, Poisson and the normal distribution.',
      ideas: [
        'A random variable X maps outcomes to numbers. Discrete = counted values; continuous = measured values.',
        'Discrete pmf: P(X = x) ≥ 0 and the probabilities add to 1. The cdf is P(X ≤ x).',
        'Binomial: fixed n, two outcomes, independent trials, constant p. X = number of successes.',
        'Poisson: count of events in a fixed interval at a constant average rate λ, events independent.',
        'Normal: symmetric bell curve, mean = median = mode, total area 1, tails never touch the axis.',
        'Standardise to read tables: Z = (X − μ) / σ follows N(0, 1).',
        'Empirical rule: about 68%, 95%, 99.7% within 1, 2, 3 standard deviations.',
      ],
      formulas: [
        'E(X) = Σ x·P(X = x),   Var(X) = E(X²) − [E(X)]²',
        'E(cX) = c E(X);  Var(X + c) = Var(X);  Var(cX) = c² Var(X)',
        'Binomial: P(X = k) = C(n, k) pᵏ (1 − p)ⁿ⁻ᵏ,  E = np,  Var = np(1 − p)',
        'Poisson: P(X = x) = e^(−λ) λˣ / x!,  E = Var = λ',
        'Z = (X − μ) / σ ~ N(0, 1)',
        'P(Z > z) = 1 − P(Z ≤ z)',
      ],
      traps: [
        'In X ~ N(μ, σ²) the second number is the variance. N(5, 4) means σ = 2. Check what the question gives.',
        'Poisson: mean and variance are equal.',
        'Binomial can be approximated by Poisson when n is large and p is small (λ = np).',
        'Covariance only shows direction, not strength. Independent variables have covariance 0.',
      ],
      example: 'Vaccine with p = 0.8, n = 10: P(exactly 8 protected) = C(10, 8) × 0.8⁸ × 0.2² ≈ 0.302.',
    },
  },

  5: {
    videos: [
      { id: 'YAlJCEDH2uY', title: 'The Central Limit Theorem, Clearly Explained!!!', channel: 'StatQuest with Josh Starmer', note: 'What the CLT says and why it matters.' },
      { id: 'XNgt7F6FqDU', title: 'The standard error, Clearly Explained!!!', channel: 'StatQuest with Josh Starmer', note: 'Standard error of the mean.' },
      { id: 'jXMXlV8VysQ', title: '1. Confidence Intervals for Means, using the Central Limit Theorem', channel: 'Dr. Knudson', note: 'Formula-based intervals for a mean, closest to your lecture.' },
      { id: 'TqOeMYtOc1w', title: 'Confidence Intervals, Clearly Explained!!!', channel: 'StatQuest with Josh Starmer', note: 'Builds intervals by bootstrapping. Your lecture uses z* × SE; watch this for the meaning of a CI.' },
    ],
    slide: {
      title: 'Sampling distributions and confidence intervals',
      sub: 'From a sample statistic to a plausible range for the population mean.',
      ideas: [
        'A parameter describes the population; a statistic describes the sample. A statistic varies from sample to sample, so it has a sampling distribution.',
        'Law of Large Numbers: as the number of observations grows, the sample mean gets closer to μ.',
        'Central Limit Theorem: for large n (about 30 or more) the sample mean is approximately normal, whatever the population shape.',
        'Standard error measures how much an estimator varies between samples. Smaller SE means a more precise estimate.',
        'Confidence level (1 − α): the share of such intervals, over repeated samples, that contain the true parameter.',
        'Higher confidence gives a wider interval; a larger sample gives a narrower one.',
      ],
      formulas: [
        'E(X̄) = μ,   SE(X̄) = σ / √n  (estimate with s / √n)',
        'Population normal: X̄ ~ N(μ, σ² / n)',
        'Margin of error = z* × SE',
        'CI = x̄ ± z* · s / √n',
        'z* = 1.645 (90%),  1.96 (95%),  2.576 (99%)',
      ],
      traps: [
        'SD describes spread of individual values; SE describes spread of sample means.',
        'A CI is not the range containing 95% of the data.',
        'Read a CI as "95% confident the true mean lies between a and b".',
        'Do not confuse n (sample size) with the number of samples.',
      ],
      example: 'n = 50, x̄ = 175 cm, s = 6 cm: ME = 1.96 × 6 / √50 ≈ 1.68, so the 95% CI is (173.32, 176.68) cm.',
    },
  },

  6: {
    videos: [
      { id: 'dFa-zmjtswY', title: 'Statistics Part 1: Hypothesis Testing, Null vs Alternative & Standard Deviation', channel: 'QSPplus', note: 'Null vs alternative hypotheses.' },
      { id: 'vemZtEM63GY', title: 'p-values: What they are and how to interpret them', channel: 'StatQuest with Josh Starmer', note: 'Understanding the p-value.' },
      { id: 'bsZGt-caXO4', title: 'StatQuest: One or Two Tailed P-Values', channel: 'StatQuest with Josh Starmer', note: 'One-tailed vs two-tailed tests.' },
      { id: 'bf3egy7TQ2Q', title: 'How P-Values Help Us Test Hypotheses: Crash Course Statistics #21', channel: 'CrashCourse', note: 'Using p-values to decide.' },
      { id: '7mE-K_w1v90', title: 'Type I Errors, Type II Errors, and the Power of the Test', channel: 'jbstatistics', note: 'α, β and power.' },
    ],
    slide: {
      title: 'Hypothesis testing',
      sub: 'The six steps, p-values and the two kinds of error.',
      ideas: [
        'Steps: (1) H₀ and Hₐ, (2) test statistic, (3) significance level α, (4) rejection region, (5) p-value, (6) conclusion.',
        'H₀ is "no difference / no effect" and holds =, ≤ or ≥. Hₐ is the claim and holds ≠, < or >.',
        'Two-tailed uses ≠; one-tailed uses < or >.',
        'p-value: chance of a result at least this extreme if H₀ is true.',
        'Which test? σ known: z. σ unknown: t. Two groups: independent or paired.',
        'State the conclusion in the biological context, not just "reject" or "fail to reject".',
      ],
      formulas: [
        'z = (x̄ − μ₀) / (σ / √n)',
        't = (x̄ − μ₀) / (s / √n),   df = n − 1',
        'p ≤ α  ⇒  reject H₀;   p > α  ⇒  fail to reject H₀',
        'Type I error = P(reject H₀ | H₀ true) = α',
        'Type II error = P(accept H₀ | H₀ false) = β',
        'Power = 1 − β (aim for about 0.8)',
      ],
      traps: [
        'Failing to reject H₀ is not proof that H₀ is true.',
        'Lowering α lowers type I errors but raises type II errors for a fixed n.',
        'A small p-value does not mean a large or important effect.',
        'Old SPSS output may give only a two-tailed p. For a one-tailed test compare p / 2 with α.',
        'The claim being tested goes in Hₐ.',
      ],
      example: 'Claim μ = 60 mpg, σ = 4, n = 16, x̄ = 57: z = (57 − 60) / (4/√16) = −3. The two-tailed p ≈ 0.003, so reject H₀ at α = 0.05.',
    },
  },

  7: {
    videos: [
      { id: '948pLzVwLok', title: "What is a T-Test? Student's T-Test Demystified (One-Sample, Paired & Independent)", channel: 'Practical stats', note: 'The three t-tests from the lecture.' },
      { id: 'Q_pO9NzWxPY', title: 'One sample t-test vs Independent t-test vs Paired t-test', channel: 'numiqo', note: 'Which t-test to choose.' },
      { id: 'xZ_z8KWkhXE', title: "Pearson's Correlation, Clearly Explained!!!", channel: 'StatQuest with Josh Starmer', note: 'Correlation and how to interpret r.' },
      { id: 'aFDOzpTeg0s', title: 'The Essence of Linear Regression!!!', channel: 'StatQuest with Josh Starmer', note: 'Simple linear regression step by step.' },
      { id: 'bMccdk8EdGo', title: 'R-squared, Clearly Explained!!!', channel: 'StatQuest with Josh Starmer', note: 'What R² tells you.' },
    ],
    slide: {
      title: 'Common tests and regression',
      sub: 'Choose the test, check assumptions, read the output.',
      ideas: [
        'Prepare data: one row per independent unit, define variable types, check missing and impossible values.',
        'Choose the test from the outcome type, number of groups, paired vs independent, and any covariate.',
        'One sample: one-sample t. Two independent groups: independent t (Mann–Whitney). Paired: paired t (Wilcoxon).',
        'Three or more groups: one-way ANOVA (Kruskal–Wallis). Two categorical variables: chi-square (Fisher exact if counts are small).',
        'Two numeric variables: Pearson correlation (Spearman). Predict an outcome: linear regression.',
        't-test assumptions: independence, numerical data, no extreme outliers, roughly normal. Check with Q–Q plot and Shapiro–Wilk.',
        'Regression checks: residuals normal, constant variance, linear pattern, independent errors.',
      ],
      formulas: [
        't = (x̄ − m) / (s / √n)',
        "Cohen's d (one sample) = (x̄ − m) / s;  0.2 small, 0.5 medium, 0.8 large",
        'Population model: Y = α + βX + ε',
        'Fitted line: Ŷ = α̂ + β̂X',
        'R² = share of the variance in Y explained by X',
      ],
      traps: [
        'Shapiro–Wilk p < 0.05 means normality cannot be assumed. p > 0.05 means it can.',
        'Do not predict far outside the range of the data (extrapolation).',
        'Technical replicates are not independent observations.',
        'Slope = expected change in Y for one unit of X.',
        'Random sampling lets you generalise; random assignment supports causal claims.',
      ],
      example: 'Age vs blood pressure example: r = 0.679, R² = 0.462, so about 46% of the variation in BP is explained by age.',
    },
  },
};

/* Spoken walkthrough per chapter (the first slide plays it). seconds = length of the mp3. */
window.VINDHI_AUDIO = {
  1: { file: 'materials/voice-notes/ch01-explained.mp3', seconds: 227 },
  2: { file: 'materials/voice-notes/ch02-explained.mp3', seconds: 177 },
  3: { file: 'materials/voice-notes/ch03-explained.mp3', seconds: 205 },
  4: { file: 'materials/voice-notes/ch04-explained.mp3', seconds: 208 },
  5: { file: 'materials/voice-notes/ch05-explained.mp3', seconds: 195 },
  6: { file: 'materials/voice-notes/ch06-explained.mp3', seconds: 213 },
  7: { file: 'materials/voice-notes/ch07-explained.mp3', seconds: 198 },
};
