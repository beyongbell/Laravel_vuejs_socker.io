<?php

namespace App\Http\Controllers;

use App\Message;
use Illuminate\Http\Request;

class MessageController extends Controller
{
    public function fetch() {
        return Message::all();
    }
    public function create(Request $request)
    {
        Message::create(['text' => $request->text]);
        return $request;
    }
}
