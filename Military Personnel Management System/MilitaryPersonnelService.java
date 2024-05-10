// MilitaryPersonnelService.java
import java.util.ArrayList;
import java.util.List;

public class MilitaryPersonnelService {
    private List<MilitaryPersonnel> personnelList;

    // Constructor
    public MilitaryPersonnelService() {
        personnelList = new ArrayList<>();
    }

    // Add a military personnel
    public void addPersonnel(MilitaryPersonnel personnel) {
        personnelList.add(personnel);
    }

    // Get all military personnel
    public List<MilitaryPersonnel> getAllPersonnel() {
        return personnelList;
    }
}
