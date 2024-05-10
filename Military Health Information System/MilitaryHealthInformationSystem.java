// MilitaryHealthInformationSystem.java
import java.util.ArrayList;
import java.util.List;

public class MilitaryHealthInformationSystem {
    private static List<HealthRecord> healthRecords = new ArrayList<>();

    public static void main(String[] args) {
        // Initialize data
        initializeData();

        // Start the server
        HealthInformationServer server = new HealthInformationServer(healthRecords);
        server.startServer();
    }

    private static void initializeData() {
        // Dummy data for demonstration
        healthRecords.add(new HealthRecord(1, "John Doe", "Male", 25, "A+"));
        healthRecords.add(new HealthRecord(2, "Jane Smith", "Female", 30, "B-"));
    }
}
