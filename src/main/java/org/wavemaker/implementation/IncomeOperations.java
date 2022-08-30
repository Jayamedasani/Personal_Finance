package org.wavemaker.implementation;
import org.wavemaker.model.Income;
import java.util.List;
public interface IncomeOperations {
    void addIncome(Income income);
    void deleteIncome(Income income);
    void updateIncome(Income income);
    List<Income> getAllIncome();
    List<Income> searchIncome(String incomeCategory);
}
