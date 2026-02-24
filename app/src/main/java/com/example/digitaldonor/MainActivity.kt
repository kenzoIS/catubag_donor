package com.example.digitaldonor

import android.os.Bundle
import android.util.Patterns
import android.view.View
import android.widget.EditText
import android.widget.TextView
import android.widget.Toast
import androidx.appcompat.app.AppCompatActivity
import androidx.cardview.widget.CardView

class MainActivity : AppCompatActivity() {

    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)
        setContentView(R.layout.activity_main)

        val etEmail = findViewById<EditText>(R.id.etEmail)
        val etPassword = findViewById<EditText>(R.id.etPassword)

        // ✅ Containers for highlight (LinearLayouts)
        val emailContainer = findViewById<View>(R.id.emailContainer)
        val passwordContainer = findViewById<View>(R.id.passwordContainer)

        // ✅ CardViews (tap area) for focusing inputs
        val cardEmail = findViewById<View>(R.id.cardEmail)
        val cardPassword = findViewById<View>(R.id.cardPassword)

        // ✅ Login button (CardView + TextView)
        val cardLogin = findViewById<CardView>(R.id.cardLogin)
        val btnLogin = findViewById<TextView>(R.id.btnLogin)

        val tvForgot = findViewById<TextView>(R.id.tvForgot)
        val tvSignUp = findViewById<TextView>(R.id.tvSignUp)

        // Tap card focuses EditText (so highlight triggers even if user taps icon/blank area)
        cardEmail.setOnClickListener { etEmail.requestFocus() }
        cardPassword.setOnClickListener { etPassword.requestFocus() }

        // ✅ Highlight effect using bg_input_selector (state_selected)
        etEmail.setOnFocusChangeListener { _, hasFocus ->
            emailContainer.isSelected = hasFocus
        }
        etPassword.setOnFocusChangeListener { _, hasFocus ->
            passwordContainer.isSelected = hasFocus
        }

        tvSignUp.setOnClickListener {
            Toast.makeText(this, "Sign up clicked", Toast.LENGTH_SHORT).show()
        }

        tvForgot.setOnClickListener {
            Toast.makeText(this, "Forgot Password clicked", Toast.LENGTH_SHORT).show()
        }

        val doLogin = {
            val email = etEmail.text.toString().trim()
            val pass = etPassword.text.toString()

            when {
                email.isEmpty() -> {
                    etEmail.error = "Email is required"
                    etEmail.requestFocus()
                }
                !Patterns.EMAIL_ADDRESS.matcher(email).matches() -> {
                    etEmail.error = "Enter a valid email"
                    etEmail.requestFocus()
                }
                pass.isEmpty() -> {
                    etPassword.error = "Password is required"
                    etPassword.requestFocus()
                }
                pass.length < 6 -> {
                    etPassword.error = "Password must be at least 6 characters"
                    etPassword.requestFocus()
                }
                else -> {
                    Toast.makeText(this, "Login clicked ✅", Toast.LENGTH_SHORT).show()
                }
            }
        }

        cardLogin.setOnClickListener { doLogin() }
        btnLogin.setOnClickListener { doLogin() }
    }
}