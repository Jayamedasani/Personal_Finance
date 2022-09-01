package org.wavemaker.implementation;
import org.wavemaker.model.ExpenditureCategory;
import java.util.List;
public interface ExpenditureCategoryOperations {
    void addExpenditureCategory(String expenditureName);
    void deleteExpenditureCategory(String expenditureName);
    void updateExpenditureCategory(String oldExpenditureCategoryName,String updatedExpenditureCategoryName);
    List<ExpenditureCategory> getAllExpenditureCategory();
}
