package org.wavemaker.model;

import java.util.Objects;

public class Expenditure {
    private String name,category;
    private int amount;
    private String processedDate,processedTime;

    public Expenditure() {
    }

    public Expenditure(String name, String category, int amount, String processedDate, String processedTime) {
        this.name = name;
        this.category = category;
        this.amount = amount;
        this.processedDate = processedDate;
        this.processedTime = processedTime;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getCategory() {
        return category;
    }

    public void setCategory(String category) {
        this.category = category;
    }

    public int getAmount() {
        return amount;
    }

    public void setAmount(int amount) {
        this.amount = amount;
    }

    public String getProcessedDate() {
        return processedDate;
    }

    public void setProcessedDate(String processedDate) {
        this.processedDate = processedDate;
    }

    public String getProcessedTime() {
        return processedTime;
    }

    public void setProcessedTime(String processedTime) {
        this.processedTime = processedTime;
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (o == null || getClass() != o.getClass()) return false;
        Expenditure that = (Expenditure) o;
        return amount == that.amount && Objects.equals(name, that.name) && Objects.equals(category, that.category) && Objects.equals(processedDate, that.processedDate) && Objects.equals(processedTime, that.processedTime);
    }

    @Override
    public int hashCode() {
        return Objects.hash(name, category, amount, processedDate, processedTime);
    }

    @Override
    public String toString() {
        return "Expenditure{" +
                "name='" + name + '\'' +
                ", category='" + category + '\'' +
                ", amount=" + amount +
                ", processedDate='" + processedDate + '\'' +
                ", processedTime='" + processedTime + '\'' +
                '}';
    }
}
