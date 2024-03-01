// Your Java file management utility code here
import java.io.File;

public class FileManager {
    public static void main(String[] args) {
        // List files in directory
        File folder = new File("path/to/directory");
        File[] files = folder.listFiles();
        if (files != null) {
            for (File file : files) {
                System.out.println(file.getName());
            }
        }

        // Create new directory
        File newDir = new File("path/to/new/directory");
        if (newDir.mkdir()) {
            System.out.println("New directory created successfully");
        } else {
            System.out.println("Failed to create new directory");
        }
    }
}
