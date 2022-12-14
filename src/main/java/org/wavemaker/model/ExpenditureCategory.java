package org.wavemaker.model;
import java.util.Objects;
public class ExpenditureCategory {
    private String name;
    public ExpenditureCategory() {
    }
    public ExpenditureCategory(String name) {
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
        ExpenditureCategory that = (ExpenditureCategory) o;
        return Objects.equals(name, that.name);
    }
    @Override
    public int hashCode() {
        return Objects.hash(name);
    }

    @Override
    public String toString() {
        return "ExpenditureCategoryDAO{" +
                "name='" + name + '\'' +
                '}';
    }
}
