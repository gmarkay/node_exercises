
-- 1.Query all of the entries in the Genre table
SELECT * FROM genre

-- 2. Using the INSERT statement, add one of your favorite artists to the artist table.
INSERT INTO artist VALUES (null, "The White Stripes", 1997)

-- 3.Using the INSERT statement, add some songs that are on that album to the Song table.
INSERT INTO album VALUES(null, "White Blood Cells", "7/3/2001", 2446, "Third Man",
(SELECT artistID FROM artist a WHERE a.artistName = "The White Stripes"),
(SELECT genreId FROM genre g WHERE g.label = "Rock")
)

-- 4.Using the INSERT statement, add some songs that are on that album to the Song table.
INSERT INTO Song (SongId, Title, SongLength, ReleaseDate, GenreId, artistId, albumId)
SELECT null,  "Hotel Yorba", 130, al.ReleaseDate, al.GenreId, al.artistID, al.albumId
from album al
where al.artistId = 29
and al.albumId = 29

-- 5. Write a SELECT query that provides the song titles, album title, and artist name
select  s.title, al.title, ar.artistName
from song s
LEFT JOIN album al
 on s.albumId= al.albumId
left join artist ar
on s.artistId = ar.artistId
where ar.artistName="The White Stripes"

-- 5b. only get song off particular album
select  s.title, al.title, ar.artistName
from song s
LEFT JOIN album al
 on s.albumId= al.albumId
left join artist ar
on s.artistId = ar.artistId
where ar.artistName="The White Stripes"
and al.title ="White Blood Cells"

--6.Write a SELECT statement to display how many songs exist for each album. 
select count(s.title) 'songs on album', a.title
from song s
join album a
on s.albumid = a.albumid
group by a.albumId

-- 7. Write a SELECT statement to display how many songs exist for each artist. 
select count(s.title) 'songs by aritist', a.artistname
from song s
join artist a
on s.artistid = a.artistid
group by a.artistid

-- 8. Write a SELECT statement to display how many songs exist for each genre. 
select count(s.title) 'songs in genre', g.label
from song s
join genre g
on s.genreid = g.genreid
group by g.genreid

-- 9. Using MAX() function, write a select statement to find the album with the longest duration.
select max(a.albumlength) 'duration', a.title
from album a

-- 10. Using MAX() function, write a select statement to find the song with the longest duration. The result should display the song title and the duration.
-- 11.Modify the previous query to also display the title of the album.
select max(s.songlength) 'length', s.title, a.albumtitle
from song s
join album a
on s.albumid = a.albumid