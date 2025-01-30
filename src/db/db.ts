import mongoose from 'mongoose';

const uri: string = 'mongodb+srv://mohsin411:BSL8M46bmREIF2jB@mohsinogen.smovl.mongodb.net/photography_portfolio?retryWrites=true&w=majority&appName=mohsinogen';

// Define a type for the cached connection
interface Cached {
  conn: mongoose.Mongoose | null;
  promise: Promise<mongoose.Mongoose> | null;
}

// Use a type assertion to tell TypeScript about the global object
let cached = (global as typeof globalThis & { mongoose: Cached }).mongoose;

if (!cached) {
  cached = (global as typeof globalThis & { mongoose: Cached }).mongoose = { conn: null, promise: null };
}

async function dbConnect(): Promise<mongoose.Mongoose> {
  if (cached.conn) {
    return cached.conn;
  }

  if (!cached.promise) {
    const opts = {
      bufferCommands: false,
    };

    cached.promise = mongoose.connect(uri, opts).then((mongoose) => {
      return mongoose;
    });
  }

  try {
    cached.conn = await cached.promise;
  } catch (e) {
    cached.promise = null;
    throw e;
  }

  return cached.conn;
}

export default dbConnect;