package com.example.forgotpasswordandotp

import android.content.Intent
import android.os.Bundle
import androidx.appcompat.app.AppCompatActivity

class MainActivity : AppCompatActivity() {
    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)

        // This is a "Redirect" Activity.
        // It immediately opens your ForgotPasswordActivity when the app starts.
        val intent = Intent(this, ForgotPasswordActivity::class.java)
        startActivity(intent)
        finish() // Closes MainActivity so the user doesn't go back to a blank screen
    }
}