<?php

namespace App\Http\Controllers;

use App\Models\Ticket;
use Illuminate\Http\Request;

class TicketController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $data = [{"1": "2",
                "Tarea 1": "Tarea 2",
                "01-06-2024": "",
                "Usuario 1": "Usuario 1",
                "100%": "80%"},
            {
                "1": "3",
                "Tarea 1": "Tarea 3",
                "01-06-2024": "05-06-2024",
                "Usuario 1": "Usuario 1",
                "100%": "100%"
            },
            {
                "1": "4",
                "Tarea 1": "Tarea 4",
                "01-06-2024": "",
                "Usuario 1": "Usuario 2",
                "100%": "45%"
            },
            {
                "1": "5",
                "Tarea 1": "Tarea 5",
                "01-06-2024": "05-06-2024",
                "Usuario 1": "Usuario 2",
                "100%": "100%"
            },
            {
                "1": "6",
                "Tarea 1": "Tarea 6",
                "01-06-2024": "06-06-2024",
                "Usuario 1": "Usuario 2",
                "100%": "100%"
            }];
        return $data;
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        //
    }

    /**
     * Display the specified resource.
     */
    public function show(Ticket $ticket)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(Ticket $ticket)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, Ticket $ticket)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Ticket $ticket)
    {
        //
    }
}
