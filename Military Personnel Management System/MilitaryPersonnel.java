// MilitaryPersonnel.java
public class MilitaryPersonnel {
    private int id;
    private String name;
    private String rank;

    // Constructor
    public MilitaryPersonnel(int id, String name, String rank) {
        this.id = id;
        this.name = name;
        this.rank = rank;
    }

    // Getters and setters
    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getRank() {
        return rank;
    }

    public void setRank(String rank) {
        this.rank = rank;
    }
}
