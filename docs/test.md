---
Class: "[[CPSC429 - Machine Learning]]"
date: 2024-10-24
Teacher: "[[Dr. Che]]"
Topic: "[[Machine Learning]]"
---
**Overview: Ensemble Learning and Random Forests**

**Objective**:

Ensemble learning leverages the concept of combining multiple predictors (classifiers or regressors) to improve prediction performance beyond what a single model can achieve. This chapter explores various ensemble methods, including voting classifiers, bagging, random forests, boosting, and stacking. The focus is on how these methods combine the strengths of individual models to create a more robust overall predictor. Random forests are highlighted as one of the most effective and versatile methods in this category.

[[ML_Ch7_VotingClassifiers]] 

[[ML_Ch7_BaggingAndPasting]]

[[ML_Ch7_OutOfBagEvaluation]]

[[ML_Ch7_RandomForests]]

[[ML_Ch7_ExtremelyRandomizedTrees]]

[[ML_Ch7_FeatureImportanceInRandomForests]]

[[ML_Ch7_Boosting]] 

[[ML_Ch7_AdaBoost]]

[[ML_Ch7_GradientBoosting]]

[[ML_Ch7_RandomPatchesAndRandomSubspaces]]

[[ML_Ch7_Stacking]] 

# General Summary
1. **Ensemble Learning Overview**:

	- Combines the predictions of multiple models to improve overall accuracy.
	- Relies on the “wisdom of the crowd” to reduce the errors of individual models.
	- Common methods include voting classifiers, bagging, random forests, boosting, and stacking.

2. **Voting Classifiers**:

	- Aggregate predictions from different models.
	- **Hard Voting**: Chooses the majority class.
	- **Soft Voting**: Averages class probabilities for better performance.

3. **Bagging and Pasting**:

	- **Bagging** (Bootstrap Aggregating): Uses random samples with replacement for training.
	- **Pasting**: Uses random samples without replacement.
	- Reduces variance by averaging multiple models, making the ensemble more robust.

4. **Out-of-Bag (OOB) Evaluation**:

	- In bagging, each model is trained on a subset, leaving some instances out-of-bag.
	- OOB instances can be used for internal validation, eliminating the need for a separate validation set.
	- Provides a reliable estimate of the model’s performance.

5. **Random Forests**:

	- A specific type of bagging ensemble using decision trees.
	- Adds randomness by selecting a random subset of features for splitting nodes.
	- Reduces overfitting and improves generalization.
	- Offers automatic calculation of feature importances.

6. **Extra-Trees (Extremely Randomized Trees)**:

	- Introduces more randomness than random forests by using random thresholds for splits.
	- Results in higher bias but lower variance, making them faster to train.
	- Effective in situations with high-dimensional data and large training sets.

7. **Feature Importance**:

	- Random forests rank features based on their impact on reducing impurity across all trees.
	- Useful for feature selection and understanding the factors driving predictions.

8. **Boosting**:

	- Builds models sequentially, each correcting the errors of its predecessor.
	- **AdaBoost**: Adjusts instance weights to focus on harder cases.
	- **Gradient Boosting**: Trains models to predict the residuals of previous models.
	- Requires careful tuning of hyperparameters like learning rate and number of estimators to avoid overfitting.

9. **Random Patches and Random Subspaces**:

	- **Random Patches**: Trains each model on a random subset of instances and features.
	- **Random Subspaces**: Trains each model on all instances but a subset of features.
	- Useful for improving model diversity and handling high-dimensional data.

10. **Stacking**:

	- Combines the predictions of base models using a meta-learner.
	- Uses cross-validation to train the meta-learner on out-of-sample predictions.
	- Often achieves better performance than other ensemble methods by learning the best way to combine models.