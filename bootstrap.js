import javax.swing.*;
import java.awt.*;
import java.awt.event.*;

public class ItalianFoodiess extends JFrame {

    public ItalianFoodiess() {
        setTitle("Italian Foodiess");
        setSize(1000, 700);
        setDefaultCloseOperation(JFrame.EXIT_ON_CLOSE);
        setLocationRelativeTo(null);

        Color cream = new Color(253, 246, 236);
        Color gold = new Color(212, 160, 23);
        Color dark = new Color(26, 26, 26);
        Color red = new Color(192, 57, 43);

        JPanel mainPanel = new JPanel();
        mainPanel.setLayout(new BorderLayout());

        // NAVBAR
        JPanel navbar = new JPanel();
        navbar.setBackground(dark);
        navbar.setLayout(new FlowLayout(FlowLayout.CENTER, 20, 15));

        JLabel logo = new JLabel("🍝 Italian Foodiess");
        logo.setForeground(gold);
        logo.setFont(new Font("Serif", Font.BOLD, 24));
        navbar.add(logo);

        String[] menu = {"Home", "About", "Menu", "Reviews", "Reservation", "Contact"};
        for (String item : menu) {
            JButton btn = new JButton(item);
            btn.setBackground(dark);
            btn.setForeground(Color.WHITE);
            btn.setBorderPainted(false);
            navbar.add(btn);
        }

        mainPanel.add(navbar, BorderLayout.NORTH);

        // CENTER PANEL
        JPanel centerPanel = new JPanel();
        centerPanel.setLayout(new BoxLayout(centerPanel, BoxLayout.Y_AXIS));
        centerPanel.setBackground(cream);

        // HERO SECTION
        JPanel hero = new JPanel();
        hero.setBackground(red);
        hero.setPreferredSize(new Dimension(1000, 250));
        hero.setLayout(new GridLayout(3, 1));

        JLabel title = new JLabel("Taste of Authentic Italy", SwingConstants.CENTER);
        title.setForeground(Color.WHITE);
        title.setFont(new Font("Serif", Font.BOLD, 36));

        JLabel subtitle = new JLabel("Fresh ingredients. Unforgettable flavors.", SwingConstants.CENTER);
        subtitle.setForeground(Color.WHITE);
        subtitle.setFont(new Font("SansSerif", Font.PLAIN, 18));

        JButton orderBtn = new JButton("Explore Menu");
        orderBtn.setBackground(gold);
        orderBtn.setForeground(Color.WHITE);

        hero.add(new JLabel(""));
        hero.add(title);
        hero.add(subtitle);

        centerPanel.add(hero);

        // ABOUT SECTION
        JPanel about = new JPanel();
        about.setBackground(Color.WHITE);
        about.setLayout(new GridLayout(2,1));
        about.setBorder(BorderFactory.createTitledBorder("About Us"));

        JLabel aboutText = new JLabel(
        "<html><center>Italian Foodiess brings authentic Italian cuisine.<br>" +
        "Wood-fired pizzas, creamy pasta, and fresh ingredients daily.</center></html>",
        SwingConstants.CENTER);

        about.add(aboutText);
        centerPanel.add(about);

        // MENU SECTION
        JPanel menuPanel = new JPanel();
        menuPanel.setBackground(cream);
        menuPanel.setLayout(new GridLayout(4, 2, 10, 10));
        menuPanel.setBorder(BorderFactory.createTitledBorder("Our Special Menu"));

        menuPanel.add(new JLabel("🍕 Chicken Pizza"));
        menuPanel.add(new JLabel("₹350"));

        menuPanel.add(new JLabel("🍝 Chicken Pasta"));
        menuPanel.add(new JLabel("₹350"));

        menuPanel.add(new JLabel("🥗 Italian Noodles"));
        menuPanel.add(new JLabel("₹280"));

        menuPanel.add(new JLabel("🍕 Margherita Pizza"));
        menuPanel.add(new JLabel("₹250"));

        centerPanel.add(menuPanel);

        // RESERVATION
        JPanel reserve = new JPanel();
        reserve.setBackground(Color.WHITE);
        reserve.setBorder(BorderFactory.createTitledBorder("Reserve Table"));

        JTextField name = new JTextField(10);
        JTextField phone = new JTextField(10);
        JButton book = new JButton("Confirm Reservation");
        book.setBackground(gold);
        book.setForeground(Color.WHITE);

        reserve.add(new JLabel("Name:"));
        reserve.add(name);
        reserve.add(new JLabel("Phone:"));
        reserve.add(phone);
        reserve.add(book);

        centerPanel.add(reserve);

        // FOOTER
        JPanel footer = new JPanel();
        footer.setBackground(dark);

        JLabel contact = new JLabel("📍 MG Road, Nagpur | ☎ +91 98765 43210");
        contact.setForeground(Color.WHITE);

        footer.add(contact);

        mainPanel.add(new JScrollPane(centerPanel), BorderLayout.CENTER);
        mainPanel.add(footer, BorderLayout.SOUTH);

        add(mainPanel);
        setVisible(true);
    }

    public static void main(String[] args) {
        new ItalianFoodiess();
    }
}
