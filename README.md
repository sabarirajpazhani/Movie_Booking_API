# Movie Booking API

This API allows users to browse movies, book movie tickets, and cancel bookings. It also provides details about available movies and seats for each movie.

![a9v01-lpy1m](https://github.com/user-attachments/assets/db6aee35-3e8c-43b9-b607-7e5cb69b86bd)

## Features

- **Get all movies:** Retrieve the list of available movies.
- **Get a single movie:** Retrieve details of a specific movie by its ID.
- **Book a seat:** Book seats for a selected movie.
- **Cancel a booking:** Cancel a seat booking for a selected movie.

## API Endpoints
### 1. Get All Movies
**Endpoint:** `GET /api/v1/movies`

**Description:** Retrieves the list of all available movies.

```javascript
exports.getMovies = async(req,res,next)=>{

    const movies = await moviesModel.find({});

    res.json({
        movies
    })
}
```
**Response Example:**
```javascript
{
  "movies": [
    {
      "_id": "64fdd481d947c2e9c2a5375d",
      "title": "Goat",
      "availableSeats": 120
    },
    {
      "_id": "64fdd481d947c2e9c2a5375e",
      "title": "Leo",
      "availableSeats": 150
    }
  ]
}
```

### 2. Get a Single Movie by ID
**Endpoint:** `GET /api/v1/movies/:id`

**Description:** Fetches details of a movie based on its ID.

```javascript
exports.getSingleMovies = async(req,res,next)=>{
    try{
        const movieID = await moviesModel.findById(req.params.id);

        res.json({
            movieID
        })
    }
    catch(error){
        res.status(404).json({
            success:false,
            message: "Unable to ge the Movie with the ID"
        })
    }
}
```

**Response Example:**
```javascript
{
  "movieID": {
    "_id": "64fdd481d947c2e9c2a5375d",
    "title": "Goat",
    "availableSeats": 120
  }
}
```

### 3. Book a Seat for a Movie
**Endpoint:** POST `/api/v2/movies/:id/book`

**Description:** Books a specific number of seats for a movie.

```javascript
exports.getBooking=async(req,res,next)=>{
    const {userName, seats}= req.body;
    let movie = await moviesModel.findById(req.params.id);
    
    if(!movie){
        return res.status(404).json({
            message: "Movie not Found"
        })
    }

    if(movie.availableSeats < seats){
        return res.status(400).json({
            message:"Not enough avaible seats"
        })
    }

    movie.availableSeats -=seats;
    await movie.save();
    
    const booking = new bookingModel({
        movieId: movie._id,
        userName,
        seats
    });
    await booking.save();

    res.json({
        message: "Booking Seccessful",
        booking
    });
}

```

**Request Body:**
```javascript
{
  "userName": "JohnDoe",
  "seats": 2
}
```
**Response Example:**
```javascript
{
  "message": "Booking Successful",
  "booking": {
    "_id": "64fdd48ad947c2e9c2a5375f",
    "movieId": "64fdd481d947c2e9c2a5375d",
    "userName": "JohnDoe",
    "seats": 2
  }
}
```

### 4. Cancel a Booking
**Endpoint:** POST /api/v2/movies/:id/cancel

**Description:** Cancels a seat booking for a movie.
**Request Body:**
```javascript
{
  "userName": "JohnDoe"
}
```
**Response Example:**
```javascript
{
  "message": "Booking Canceled"
}
```

## Models
**Movie Model**
```javascript
{
  "title": "string",
  "availableSeats": "number"
}
```
**Booking Model**
```javascript
{
  "movieId": "ObjectId",
  "userName": "string",
  "seats": "number"
}
```

## Database Configuration
The API uses MongoDB for storing movie and booking data. You can connect the database by setting the `DB_URL` in the `.env` file.

## API Testing Visuals

### 1. Get All Movies

![image](https://github.com/user-attachments/assets/5910fbcf-d3ef-4df4-83ea-3639dfd4b5ba)

### 2. Get a Single Movie by ID

![image](https://github.com/user-attachments/assets/6f929b60-a676-48e1-8126-fad4298f8de2)

### 3. Book a Seat for a Movie

![image](https://github.com/user-attachments/assets/39ab5b12-4b57-411a-8847-9cf7d79206fc)

### 4. Cancel a Booking

![image](https://github.com/user-attachments/assets/56b125bc-efb0-4fb0-a84e-a4ed71d3ded2)


## MongoDB Visuals

### Bookings
![image](https://github.com/user-attachments/assets/c16ff72b-c743-4b8c-9068-27ac1604ae0d)

### Movies
![image](https://github.com/user-attachments/assets/7e14bd07-7fb9-473e-97bc-afbe16863d90)

## Technologies Used
