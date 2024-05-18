import Cart from '../service/Cart';
import Book from '../domain/Book';
import MusicAlbum from '../domain/MusicAlbum';
import Movie from '../domain/Movie';

test('new card should be empty', () => {
  const cart = new Cart();

  expect(cart.items.length).toBe(0);
});

test("add card", () => {
  const cart = new Cart();
  cart.add(new Book(1001, "War and Piece", "Leo Tolstoy", 2000, 1225));
  cart.add(new MusicAlbum(1008, "Meteora", "Linkin Park", 900));
  cart.add(
    new Movie( 1002, 
      "The Avengers", 
      3000, 
      2012, 
      "USA", 
      'Avengers Assemble!',
      ['fantasy', 'gunman', 'advanture'],
      "137 min / 02:17",
      "Marvel")
  
    expect(cart.items.length).toBe(3); 
  );