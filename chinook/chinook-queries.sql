-- 1.Provide a query showing Customers (just their full names, customer ID and country) who are not in the US.

SELECT (firstName || " "|| lastName) as 'Full Name',  CustomerId, Country
FROM Customer
WHERE Country !="USA"

-- 2.Provide a query only showing the Customers from Brazil.

SELECT (firstName || " "|| lastName) as 'Full Name',  CustomerId, Country
FROM Customer
WHERE Country ="Brazil"

-- 3. Provide a query showing the Invoices of customers who are from Brazil. 
-- The resultant table should show the customer's full name, Invoice ID, Date of the invoice and billing country.

SELECT (firstName || " "|| lastName) as 'Full Name',  InvoiceId, InvoiceDate, BillingCountry
FROM Customer
JOIN  INVOICE on Customer.CustomerId = Invoice.CustomerId
Where country = "Brazil"

-- 4. Provide a query showing only the Employees who are Sales Agents.

SELECT * FROM Employee WHERE title ='Sales Support Agent'

-- 5. Provide a query showing a unique list of billing countries from the Invoice table.

SELECT distinct BillingCountry FROM Invoice

-- 6. Provide a query that shows the invoices associated with each sales agent. 
-- The resultant table should include the Sales Agent's full name.

SELECT  InvoiceId, InvoiceDate, Total, (emp.firstName  || " "|| emp.lastName) as 'Sales Rep'
FROM Invoice inv
Join customer cu on inv.CustomerId = cu.CustomerId
Join employee emp  on cu.SupportRepId =  emp.EmployeeId
where emp.title='Sales Support Agent'
GROUP BY InvoiceId
ORDER BY emp.lastName


-- 7. Provide a query that shows the Invoice Total, Customer name, Country and Sale Agent name for all invoices and customers.

SELECT  InvoiceId,Total, (cu.firstName  || " "|| cu.lastName) as 'Customer', cu.Country,(emp.firstName  || " "|| emp.lastName) as 'Sales Rep'
FROM Invoice inv
Join customer cu on inv.CustomerId = cu.CustomerId
Join employee emp  on cu.SupportRepId =  emp.EmployeeId

-- 8. How many Invoices were there in 2009 and 2011? What are the respective total sales for each of those years?

SELECT  strftime('%Y', invoiceDate) as year, count(invoiceId) as invoices, sum(total) as total
from Invoice
where year ='2009' or year = '2011'
group by year

-- 9. Looking at the InvoiceLine table, provide a query that COUNTs the number of line items for Invoice ID 37.
select count(*) as 'Line Items'
from InvoiceLine
where InvoiceLine.InvoiceId = '37'

-- 10. Looking at the InvoiceLine table, provide a query that COUNTs the number of line items for each Invoice. HINT: GROUP BY
select count(*) as 'Line Items'
from InvoiceLine
group by InvoiceId

-- 11. Provide a query that includes the track name with each invoice line item.
select  InvoiceLineId, name
from InvoiceLine 
join track on InvoiceLine.TrackId = Track.TrackId
order by invoiceLineId

-- 12. provide a query that includes the purchased track name AND artist name with each invoice line item.

select  InvoiceLineId, track.name as song, artist.name as artist
from InvoiceLine 
join track on InvoiceLine.TrackId = Track.TrackId
join album on track.AlbumId =Album.AlbumId
join artist on album.ArtistId = artist.ArtistId
order by invoiceLineId


-- 13. Provide a query that shows the # of invoices per country. HINT: GROUP BY

select count(*)
from Invoice
group by billingCountry

-- 14. Provide a query that shows the total number of tracks in each playlist. The Playlist name should be included on the resultant table.
select count(trackId), ply.name
from PlaylistTrack plt
join Playlist  ply on plt.playlistId = ply.playlistId
group by plt.PlaylistId

-- 15. Provide a query that shows all the Tracks, but displays no IDs. The resultant table should include the Album name, Media type and Genre.

select track.name, track.composer, track.milliseconds, track.bytes, track.unitPrice, al.title as Album, mt.name as 'Media Type', g.name as genre
from Track 
join album al on track.Albumid = al.AlbumId
join MediaType mt on track.MediaTypeId = mt.MediaTypeId
join genre g on track.GenreId = g.GenreId

-- 16. Provide a query that shows all Invoices but includes the # of invoice line items.

select *, count(InvoiceLine.InvoiceId) as 'Line Items'
from invoice
join InvoiceLine on Invoice.InvoiceId = InvoiceLine.InvoiceId
group by invoice.InvoiceId

-- 17. Provide a query that shows total sales made by each sales agent.

select (emp.FirstName || ' ' ||emp.lastName) as Agent, count(total) as Sales
from Employee emp
join Customer cu on cu.SupportRepId= emp.EmployeeId
join invoice on invoice.customerId = cu.CustomerId
where title = 'Sales Support Agent'
group by emp.EmployeeId

-- 18. Which sales agent made the most in sales in 2009?

select Agent as 'Best Salesperson', max(Sales) as 'Most Sales', year
from(
    select strftime('%Y', invoiceDate) as year, (emp.FirstName || ' ' ||emp.lastName) as Agent, count(total) as  Sales
    from Employee emp
    join Customer cu on cu.SupportRepId= emp.EmployeeId
    join invoice on invoice.customerId = cu.CustomerId
    where year = '2009'
    group by agent
)

-- 19. Which sales agent made the most in sales in 2010?

select Agent as 'Best Salesperson', max(Sales) as 'Most Sales', year
    from(
    select strftime('%Y', invoiceDate) as year, (emp.FirstName || ' ' ||emp.lastName) as Agent, count(total) as  Sales
    from Employee emp
    join Customer cu on cu.SupportRepId= emp.EmployeeId
    join invoice on invoice.customerId = cu.CustomerId
    where year = '2010'
    group by agent
)

-- 20. Which sales agent made the most in sales over all?

select Agent as 'Best Salesperson EVER', max(Sales) as 'Most Sales'
from(
select  (emp.FirstName || ' ' ||emp.lastName) as Agent, count(total) as  Sales
from Employee emp
join Customer cu on cu.SupportRepId= emp.EmployeeId
join invoice on invoice.customerId = cu.CustomerId
 group by agent
)


-- 21. Provide a query that shows the # of customers assigned to each sales agent.

select  (emp.FirstName || ' ' ||emp.lastName) as Agent, count(cu.CustomerId) as customers
from Employee emp
join Customer cu on cu.SupportRepId= emp.EmployeeId
group by agent

-- 22.Provide a query that shows the total sales per country. Which country's customers spent the most?

select billingCountry as Country, max(total_spent) as 'Total Spent'
from(
    select billingCountry, sum(total) as total_spent
    from Invoice
    group by billingCountry
)

-- 23.Provide a query that shows the most purchased track of 2013.
select max (Sold) as "Highest seller", song, year
from(
    select count(InvoiceLine.InvoiceLineId) as 'Sold', track.name as song, strftime('%Y', Invoice.invoiceDate) as year
    from invoiceLine
    join Invoice  on Invoice.invoiceId = InvoiceLine.InvoiceId
    join track  on track.TrackId = InvoiceLine.trackId
    where year = '2013'
    group by track.name
)

-- 24. Provide a query that shows the top 5 most purchased tracks over all.

select count(InvoiceLine.InvoiceLineId) as 'Sold', track.name as song
from invoiceLine
join Invoice  on Invoice.invoiceId = InvoiceLine.InvoiceId
join track  on track.TrackId = InvoiceLine.trackId
group by track.name
order by sold desc
limit 5


-- 25. Provide a query that shows the top 3 best selling artists.

select count(InvoiceLine.InvoiceLineId) as 'Sold', artist.name as Artist
from invoiceLine
join Invoice  on Invoice.invoiceId = InvoiceLine.InvoiceId
join track  on track.TrackId = InvoiceLine.trackId
join album on track.AlbumId = Album.AlbumId
join artist on album.ArtistId = artist.ArtistId
group by artist.name
order by sold desc
limit 3

-- 26. Provide a query that shows the most purchased Media Type.\

select max(sold), type
from (
    select count(InvoiceLine.InvoiceLineId) as Sold, mt.name as Type
    from invoiceLine
    join Invoice  on Invoice.invoiceId = InvoiceLine.InvoiceId
    join track  on track.TrackId = InvoiceLine.trackId
    join MediaType mt  on track.MediaTypeId = mt.MediaTypeId
    group by mt.name
)

-- 27. Provide a query that shows the number tracks purchased in all invoices that contain more than one genre.

select iv.invoiceId, count(track.trackId) as song_count, COUNT(distinct track.GenreId) as genres
from Track
join InvoiceLine il on track.trackId = il.trackId
join invoice iv on il.invoiceId = iv.InvoiceId
group by iv.invoiceId
having genres>1

