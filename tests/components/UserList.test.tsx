import { render, screen } from "@testing-library/react";
import UserList from "../../src/components/UserList";
import { User } from "../../src/entities";

describe("UserList", () => {
  it("should render user list if array of user(s) is not empty", () => {
    const usersList: User[] = [
      {
        id: 1,
        name: "Miguel",
        isAdmin: false,
      },
    ];

    render(<UserList users={usersList} />);

    usersList.forEach((user) => {
      const userLink = screen.getByRole("link", { name: user.name });

      expect(userLink).toBeInTheDocument();
      expect(userLink).toHaveAttribute('href', `/users/${user.id}`);
    });
  });

  it("should not render user list if array of user(s) is empty", () => {
    render(<UserList users={[]} />);

    expect(screen.getByText(/no users/i)).toBeInTheDocument();
  });
});
