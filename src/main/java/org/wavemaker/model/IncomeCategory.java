package org.wavemaker.model;
import java.util.Objects;
public class IncomeCategory {
    private String name;

    public IncomeCategory() {
    }

    public IncomeCategory(String name) {
        this.name = name;
    }

    public String getName() {
        return name;
    }
    public void setName(String name) {
        this.name = name;
    }
    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (o == null || getClass() != o.getClass()) return false;
        IncomeCategory incomeCategory = (IncomeCategory) o;
        return Objects.equals(name, incomeCategory.name);
    }
    @Override
    public int hashCode() {
        return Objects.hash(name);
    }
    @Override
    public String toString() {
        return "IncomeDAO{" +
                "name='" + name + '\'' +
                '}';
    }
}
