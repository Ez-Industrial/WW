import React from "react";
import { describe, it, vi, beforeEach, afterEach, expect } from "vitest";
import { render, screen, waitFor } from "@testing-library/react";
import App from "../src/App";
import * as firebase from "../src/firebase";

describe("App", () => {
  let originalConsoleError;

  beforeEach(() => {
    // Mock collection to just return its arguments for simplicity
    vi.spyOn(firebase, "collection").mockImplementation((...args) => args);

    // Mock addDoc to resolve immediately
    vi.spyOn(firebase, "addDoc").mockResolvedValue({});

    // Save and mock console.error
    originalConsoleError = console.error;
    console.error = vi.fn();
  });

  afterEach(() => {
    vi.restoreAllMocks();
    console.error = originalConsoleError;
  });

  it("test_getDocs_failure_error_handling", async () => {
    // Mock getDocs to reject with an error
    const error = new Error("Firebase fetch failed");
    vi.spyOn(firebase, "getDocs").mockRejectedValue(error);

    render(<App />);

    // Wait for useEffect to trigger obtenerUsuarios and handle error
    await waitFor(() => {
      expect(console.error).toHaveBeenCalledWith(
        "❌ Error en Firebase:",
        error
      );
    });

    // The UI should still render the heading and not crash
    expect(screen.getByText("Registro de Usuarios")).toBeInTheDocument();
    expect(screen.getByPlaceholderText("Nombre")).toBeInTheDocument();
    expect(screen.getByText("Guardar")).toBeInTheDocument();
    expect(screen.getByText("Usuarios guardados:")).toBeInTheDocument();
  });
});