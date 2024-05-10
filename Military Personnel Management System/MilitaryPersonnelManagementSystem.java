// MilitaryPersonnelManagementSystem.java
public class MilitaryPersonnelManagementSystem {

    public static void main(String[] args) {
        System.out.println("Welcome to Military Personnel Management System");

        // Create service instance and add sample personnel data
        MilitaryPersonnelService personnelService = new MilitaryPersonnelService();
        personnelService.addPersonnel(new MilitaryPersonnel(1, "John Doe", "Sergeant"));
        personnelService.addPersonnel(new MilitaryPersonnel(2, "Jane Smith", "Captain"));

        // Print personnel data
        List<MilitaryPersonnel> personnelList = personnelService.getAllPersonnel();
        for (MilitaryPersonnel personnel : personnelList) {
            System.out.println("ID: " + personnel.getId() + ", Name: " + personnel.getName() + ", Rank: " + personnel.getRank());
        }
    }
}
